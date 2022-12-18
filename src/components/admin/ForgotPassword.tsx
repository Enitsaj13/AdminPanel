import styles from '@/styles/admin/_login.module.scss'
import logo from '@/images/admin_images/admin_logo.png'
import Image from 'next/image'
import { useAppDispatch } from '@/rtk/hook'
import { toggleAdmin } from '@/rtk/features/admin/adminSlice'

const ForgotPassword = () => {
  const dispatch = useAppDispatch()

  return (
    <div className={styles.forgot__container}>
      <div className={styles.logo}>
        <Image src={logo} alt='logo' width={200} height={80} />
      </div>
      <div className={styles.forgot__title}>Forgotten Password ?</div>
      <div className={styles.forgot_text}>
        <p>
          Please enter the email address you&apos;d like your password reset
          information sent to
        </p>
      </div>
      <form>
        <div className={styles.input__field__forgot}>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Enter your email'
            required
          />
        </div>

        <div className={styles.reset__btn}>
          <button className={styles.reset} type='submit'>
            Request reset link
          </button>
          <span
            onClick={() => dispatch(toggleAdmin())}
            className={styles.cancel}
          >
            Back to Login
          </span>
        </div>
      </form>
    </div>
  )
}

export default ForgotPassword

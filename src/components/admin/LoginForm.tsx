import Image from 'next/image';
import logo from '@/images/admin_images/admin_logo.png';
import styles from '@/styles/admin/_login.module.scss';
import Link from 'next/link';
import { useAppDispatch } from '@/rtk/hook';
import { toggleAdmin } from '@/rtk/features/admin/adminSlice';

const LoginForm = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.login__container}>
      <div className={styles.logo}>
        <Image src={logo} alt='logo' width={200} height={80} />
      </div>
      <div className={styles.login__title}>Login Admin Panel</div>
      <form>
        <div className={styles.input__field__login}>
          <input
            type='text'
            name='username'
            id='username'
            placeholder=' Username'
          />
        </div>
        <div className={styles.input__field__login}>
          <input
            type='password'
            name='password'
            id='password'
            placeholder=' Password'
          />
        </div>

        <div className={styles.remember__forgot}>
          <div className={styles.remember__me}>
            <input type='checkbox' name='remember' id='remember' />
            <label htmlFor='remember'>Remember me</label>
          </div>

          <div className={styles.forgot__password}>
            <a onClick={() => dispatch(toggleAdmin())}>Forgot Password ?</a>
          </div>
        </div>
        <div className={styles.login__btn}>
          <Link href='/admin/dashboard' legacyBehavior>
            <button type='submit'>
              <a className={styles.text__login}>Login</a>
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

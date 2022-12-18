import styles from '@/styles/admin/profile_content.module.scss'

const Content = () => {
  return (
    <>
      <div className={styles.content__container}>
        <div className={styles.profile}>
          <span className={styles.profile__text}>Profile</span>
          <hr className={styles.seperator} />
        </div>
        <div className={styles.profile__container__form}>
          <form action=''>
            <div>
              <label htmlFor='username'>Username :</label>
              <input
                type='text'
                name='username'
                placeholder='SaleMyDevice'
                id='username'
              />
            </div>
            <div>
              <label htmlFor='email'>Email :</label>
              <input
                type='email'
                name='email'
                placeholder='Support@SaleMyDevice.com'
                id='email'
              />
            </div>
            <div>
              <label htmlFor='phone'>Phone :</label>
              <input
                type='number'
                name='phone'
                placeholder='(267) 423-3598'
                id='phone'
              />
            </div>
            <div>
              <label htmlFor='password'>Change Password :</label>
              <input
                type='password'
                name='password'
                placeholder='Enter your password'
                id='password'
              />
            </div>
            <div>
              <label htmlFor='confirmPassword'>Re-type Password :</label>
              <input
                type='password'
                name='confirmPassword'
                placeholder='Re-type your password'
                id='confirmPassword'
              />
            </div>
            <hr className={styles.seperator} />
            <div className={styles.profile__button}>
              <button type='submit'>Update</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Content

import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@/styles/admin/_login.module.scss'
import LoginForm from '@/components/admin/LoginForm'
import backgroundImage from '@/images/admin_images/bg_login.jpg'
import Image from 'next/legacy/image'
import ForgotPassword from '@/components/admin/ForgotPassword'

import { useAppSelector } from '@/rtk/hook'

const Admin: NextPage = () => {
  const { toggleShow } = useAppSelector((state) => state.admin)

  return (
    <>
      <Head>
        <title>Login | Admin Panel</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Image src={backgroundImage} alt='background' layout='fill' objectFit='cover' quality={100} objectPosition='center' />
      <div className={styles.main}>{toggleShow ? <LoginForm /> : <ForgotPassword />}</div>
    </>
  )
}

export default Admin

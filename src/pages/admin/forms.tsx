import type { NextPage } from 'next'
import Sidebar from '@/components/admin/Sidebar'
import Head from 'next/head'
import Footer from '@/components/admin/Footer'
import Header from '@/components/admin/Header'
import SidebarToggle from '@/components/admin/SidebarToggle'
import FormsContent from '@/components/admin/FormsContent'
import styles from '@/styles/admin/admin_layout.module.scss'

import { useAppSelector } from '@/rtk/hook'

const Forms: NextPage = () => {
  const { toggleShow } = useAppSelector((state) => state.admin)

  return (
    <>
      <Head>
        <title>Forms | Admin Panel</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div>
        {toggleShow ? <Sidebar /> : <SidebarToggle />}

        <div
          className={`${
            toggleShow
              ? styles.header__container
              : styles.header__container__toggle
          }
          `}
        >
          <Header />
        </div>
        <div
          className={`${toggleShow ? styles.content : styles.content__toggle}
        `}
        >
          <FormsContent />
        </div>

        <div
          className={`${
            toggleShow
              ? styles.footer__container
              : styles.footer__container__toggle
          }
        `}
        >
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Forms

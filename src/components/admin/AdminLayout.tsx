import Head from 'next/head'
import styles from '@/styles/admin/layout.module.scss'

const Layout = () => {
    return (
        <div>
            <Head>
                <title>Dashboard | Admin Panel</title>
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            </Head>
            <div className={styles.admin_layout}>
                <div className={styles.admin_header}></div>
                <div className={styles.admin_content}></div>
                <div className={styles.admin_footer}></div>
            </div>
        </div>
    )
}

export default Layout

import styles from '@/styles/admin/sidebar.module.scss'
import Image from 'next/image'
import Menu from '@/components/admin/Menu'
import { CgMenuRight } from 'react-icons/cg'
import { useAppDispatch } from '@/rtk/hook'
import { toggleAdmin } from '@/rtk/features/admin/adminSlice'

const Sidebar = () => {
  const dispatch = useAppDispatch()

  return (
    <>
      <div className={styles.sidebar}>
        <div className={styles.logo__container}>
          <Image
            className={styles.logo}
            src='/images/admin_images/admin_logo.png'
            alt='logo'
            width={160}
            height={60}
          />
          <a onClick={() => dispatch(toggleAdmin())}>
            <CgMenuRight className={styles.hamburger} size={25} />
          </a>
        </div>

        <Menu />
      </div>
    </>
  )
}

export default Sidebar

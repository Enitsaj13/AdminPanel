import styles from '@/styles/admin/sidebar_toggle.module.scss'
import MenuToggle from '@/components/admin/MenuToggle'
import { CgMenuLeft } from 'react-icons/cg'
import { useAppDispatch } from '@/rtk/hook'
import { toggleAdmin } from '@/rtk/features/admin/adminSlice'

const Sidebar = () => {
  const dispatch = useAppDispatch()

  return (
    <>
      <div className={styles.sidebar__toggle}>
        <div className={styles.logo__container__toggle}>
          <a onClick={() => dispatch(toggleAdmin())}>
            <CgMenuLeft className={styles.hamburger} size={25} />
          </a>
        </div>
        <MenuToggle />
      </div>
    </>
  )
}

export default Sidebar

import { useAppSelector } from '@/rtk/hook'


import styles from '@/styles/components/layout.module.scss'

interface LayoutProps {
  children: React.ReactNode | any
}

const Layout = ({ children }: LayoutProps) => {
  const { theme } = useAppSelector((state) => state.theme)

  if (
    children.type.name === 'Admin' ||
    children.type.name === 'Sidebar' ||
    children.type.name === 'AdminLayout' ||
    children.type.name === 'Dashboard' ||
    children.type.name === 'HomePage' ||
    children.type.name === 'Menu' ||
    children.type.name === 'Orders' ||
    children.type.name === 'MenuToggle' ||
    children.type.name === 'Blog' ||
    children.type.name === 'Brands' ||
    children.type.name === 'Categories' ||
    children.type.name === 'Customers' ||
    children.type.name === 'Devices' ||
    children.type.name === 'EmailSmsHistory' ||
    children.type.name === 'EmailTemplates' ||
    children.type.name === 'Faqs' ||
    children.type.name === 'Forms' ||
    children.type.name === 'Inventory' ||
    children.type.name === 'Menus' ||
    children.type.name === 'Models' ||
    children.type.name === 'Orders' ||
    children.type.name === 'Pages' ||
    children.type.name === 'PromoCodes' ||
    children.type.name === 'Settings' ||
    children.type.name === 'StaffUsers' ||
    children.type.name === 'Footer' ||
    children.type.name === 'Header' ||
    children.type.name === 'HeaderToggle' ||
    children.type.name === 'FooterToggle' ||
    children.type.name === 'CustomerContent' ||
    children.type.name === 'CustomerContentToggle' ||
    children.type.name === 'EmailSmsHistoryContent' ||
    children.type.name === 'EmailSmsHistoryContentToggle' ||
    children.type.name === 'Profile' ||
    children.type.name === 'InventoryContentToggle' ||
    children.type.name === 'InventoryContent' ||
    children.type.name === 'PromoCodesContent' ||
    children.type.name === 'PromoCodesContentToggle' ||
    children.type.name === 'EmailTemplatesContent' ||
    children.type.name === 'EmailTemplatesContentToggle' ||
    children.type.name === 'MenusContent' ||
    children.type.name === 'MenusContentToggle' ||
    children.type.name === 'DevicesContent' ||
    children.type.name === 'DevicesContentToggle' ||
    children.type.name === 'BrandsContent' ||
    children.type.name === 'BrandsContentToggle' ||
    children.type.name === 'CategoriesContent' ||
    children.type.name === 'CategoriesContentToggle'
  ) {
    return <>{children}</>
  } else {
    return (
      <>
        <div
          className={`${styles.layout} ${theme === 'light' ? styles.light : styles.dark
            }`}
        >
          <div className='container'>{children}</div>
        </div>
      </>
    )
  }
}

export default Layout

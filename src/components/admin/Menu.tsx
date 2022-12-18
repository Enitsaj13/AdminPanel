import {
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineMenuFold,
  AiOutlinePaperClip,
} from 'react-icons/ai'
import {
  HiOutlineUserGroup,
  HiOutlineUsers,
  HiOutlineTicket,
  HiOutlineMail,
} from 'react-icons/hi'
import {
  MdOutlineInventory2,
  MdOutlineTextsms,
  MdContentPaste,
  MdKeyboardArrowRight,
} from 'react-icons/md'
import { TbBoxModel } from 'react-icons/tb'
import { IoIosPhonePortrait } from 'react-icons/io'
import { BiBold, BiCategoryAlt } from 'react-icons/bi'
import { BsQuestionSquare } from 'react-icons/bs'
import { CgFormatCenter } from 'react-icons/cg'
import { IoSettingsOutline } from 'react-icons/io5'
import styles from '@/styles/admin/sidebar.module.scss'
import Link from 'next/link'
import { useState } from 'react'

const Menu = () => {
  const [activeSubMenu, setActiveSubMenu] = useState(false)

  return (
    <>
      <div className={styles.menu}>
        <ul>
          {MenuList.map((item, index) => (
            <li key={index}>
              <Link href={item.link}>
                <div className={styles.menu_container}>
                  <a>
                    <span className={styles.icon}>{item.icon}</span>
                    <span className={styles.menu__title}>{item.title}</span>
                    {item.arrow && (
                      <span className={styles.arrow}>{item.arrow}</span>
                    )}
                  </a>

                  {item.subMenu && (
                    <div className={styles.sub_menu}>
                      {item.subMenu.map((subItem, index) => (
                        <Link href={subItem.link} key={index}>
                          <a>
                            <span className={styles.menu__title}>
                              {subItem.title}
                            </span>
                          </a>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

const MenuList = [
  {
    title: 'Dashboard',
    link: '/admin/dashboard',
    icon: <AiOutlineHome />,
  },
  {
    title: <span className={styles.menu__title__orders}>Orders</span>,
    link: '/admin/orders',
    icon: <AiOutlineShoppingCart />,
    arrow: <MdKeyboardArrowRight />,
    subMenu: [
      {
        title: 'Order Status',
        link: '/admin/orders/order-status',
      },
      {
        title: 'Order List',
        link: '/admin/orders/order-list',
      },
      {
        title: 'Order Details',
        link: '/admin/orders/order-details',
      },
    ],
  },
  {
    title: 'Customers',
    link: '/admin/customers',
    icon: <HiOutlineUserGroup />,
  },
  {
    title: 'Inventory',
    link: '/admin/inventory',
    icon: <MdOutlineInventory2 />,
  },
  {
    title: 'Promo Codes',
    link: '/admin/promo-codes',
    icon: <HiOutlineTicket />,
  },
  {
    title: 'Models',
    link: '/admin/models',
    icon: <TbBoxModel />,
  },
  {
    title: 'Devices',
    link: '/admin/devices',
    icon: <IoIosPhonePortrait />,
  },
  {
    title: 'Brands',
    link: '/admin/brands',
    icon: <BiBold />,
  },
  {
    title: 'Categories',
    link: '/admin/categories',
    icon: <BiCategoryAlt />,
  },
  {
    title: 'Staff User(s)',
    link: '/admin/staff-users',
    icon: <HiOutlineUsers />,
    arrow: <MdKeyboardArrowRight />,
  },
  {
    title: 'Faqs',
    link: '/admin/faqs',
    icon: <BsQuestionSquare />,
    arrow: <MdKeyboardArrowRight />,
  },
  {
    title: 'Blog',
    link: '/admin/blog',
    icon: <MdContentPaste />,
    arrow: <MdKeyboardArrowRight />,
  },
  {
    title: 'Forms',
    link: '/admin/forms',
    icon: <AiOutlinePaperClip />,
    arrow: <MdKeyboardArrowRight />,
  },
  {
    title: 'Pages',
    link: '/admin/pages',
    icon: <CgFormatCenter />,
  },
  {
    title: 'Email Templates',
    link: '/admin/email-templates',
    icon: <HiOutlineMail />,
  },
  {
    title: 'Email/SMS History',
    link: '/admin/email-sms-history',
    icon: <MdOutlineTextsms />,
  },
  {
    title: 'Menus',
    link: '/admin/menus',
    icon: <AiOutlineMenuFold />,
  },
  {
    title: 'Settings',
    link: '/admin/settings',
    icon: <IoSettingsOutline />,
    arrow: <MdKeyboardArrowRight />,
  },
]

export default Menu

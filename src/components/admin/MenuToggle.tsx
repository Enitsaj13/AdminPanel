import {
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineMenuFold,
  AiOutlinePaperClip,
} from 'react-icons/ai';
import {
  HiOutlineUserGroup,
  HiOutlineUsers,
  HiOutlineTicket,
  HiOutlineMail,
} from 'react-icons/hi';
import {
  MdOutlineInventory2,
  MdOutlineTextsms,
  MdContentPaste,
} from 'react-icons/md';
import { TbBoxModel } from 'react-icons/tb';
import { IoIosPhonePortrait } from 'react-icons/io';
import { BiBold, BiCategoryAlt } from 'react-icons/bi';
import { BsQuestionSquare } from 'react-icons/bs';
import { CgFormatCenter } from 'react-icons/cg';
import { IoSettingsOutline } from 'react-icons/io5';
import styles from '@/styles/admin/sidebar_toggle.module.scss';
import Link from 'next/link';

const MenuToggleList = [
  {
    icon: <AiOutlineHome />,
    link: '/admin/dashboard',
  },
  {
    icon: <AiOutlineShoppingCart />,
    link: '/admin/orders',
  },
  {
    icon: <HiOutlineUserGroup />,
    link: '/admin/customers',
  },
  {
    icon: <MdOutlineInventory2 />,
    link: '/admin/inventory',
  },
  {
    icon: <HiOutlineTicket />,
    link: '/admin/promo-codes',
  },
  {
    icon: <TbBoxModel />,
    link: '/admin/models',
  },
  {
    icon: <IoIosPhonePortrait />,
    link: '/admin/devices',
  },
  {
    icon: <BiBold />,
    link: '/admin/brands',
  },
  {
    icon: <BiCategoryAlt />,
    link: '/admin/categories',
  },
  {
    icon: <HiOutlineUsers />,
    link: '/admin/staff-users',
  },
  {
    icon: <BsQuestionSquare />,
    link: '/admin/faqs',
  },
  {
    icon: <MdContentPaste />,
    link: '/admin/blog',
  },
  {
    icon: <AiOutlinePaperClip />,
    link: '/admin/forms',
  },
  {
    icon: <CgFormatCenter />,
    link: '/admin/pages',
  },
  {
    icon: <HiOutlineMail />,
    link: '/admin/email-templates',
  },
  {
    icon: <MdOutlineTextsms />,
    link: '/admin/email-sms-templates',
  },
  {
    icon: <AiOutlineMenuFold />,
    link: '/admin/menus',
  },
  {
    icon: <IoSettingsOutline />,
    link: '/admin/settings',
  },
];

const Menu = () => {
  return <>
    <div className={styles.menu__toggle}>
      <ul>
        {MenuToggleList.map((item, index) => (
          <li key={index}>
            <div className={styles.menu__toggle__div}>
              <Link href={item.link} legacyBehavior>
                <span className={styles.icon}>{item.icon}</span>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </>;
};

export default Menu;

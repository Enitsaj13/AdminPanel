import styles from '@/styles/admin/header.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import profile from '@/images/admin_images/profile.jpeg'
import { ImEye } from 'react-icons/im'

interface HeaderProps {
  style?: React.CSSProperties
}

const Header = ({ style }: HeaderProps) => {
  return (
    <header>
      <div className={styles.header__div}>
        <button className={styles.header__visit}>
          <ImEye size={18} className={styles.eye} />
          <span className={styles.header__text}>
            <a className={styles.link__text} href='https://salemydevice.com/'>
              Visit Site
            </a>
          </span>
        </button>

        <div className={styles.profile__container}>
          <Link href='/admin/profile' legacyBehavior>
            <Image
              src={profile}
              alt='profile'
              width={40}
              height={40}
              className={styles.profile__image}
            />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header

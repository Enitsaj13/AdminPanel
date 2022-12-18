import styles from '@/styles/admin/footer.module.scss'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer__text__div}>
        <span className={styles.footer__text__copyright}>
          {new Date().getFullYear()} &copy;
        </span>
        <Link href='https://salemydevice.com/' legacyBehavior>
          <strong className={styles.footer__text}>SaleMyDevice.com</strong>
        </Link>
      </div>
    </footer>
  );
}

export default Footer

import styles from '@/styles/admin/emailsms_history_content.module.scss'
import { VscSearch } from 'react-icons/vsc'
import { IoMdRemoveCircleOutline } from 'react-icons/io'

const EmailSmsHistoryContent = () => {
  return (
    <>
      <div className={styles.email__sms__content__container}>
        <div className={styles.email__sms}>
          <span className={styles.email__sms__text}>Email / SMS History</span>

          <hr className={styles.seperator} />

          <div className={styles.email__sms_search}>
            <input
              type='text'
              placeholder='Search By Order ID, To Email, SMS Phone'
            />
            <select
              name='order_id'
              id='order_id'
              className={styles.email_sms_id}
            >
              <option value='Order-ID'> - Order ID - </option>
            </select>
            <button className={styles.email__sms__search__btn}>
              Search
              <VscSearch size={14} className={styles.search__icon} />
            </button>
            <br />
            <button className={styles.email__sms__remove__btn}>
              <IoMdRemoveCircleOutline
                size={15}
                className={styles.remove__icon}
              />
              Bulk Remove
            </button>
          </div>
        </div>
        <div className={styles.email__sms__table}>
          <table>
            <thead>
              <tr>
                <th>
                  <input type='checkbox' />
                </th>
                <th>Order ID</th>
                <th>To Email</th>
                <th>Subject</th>
                <th>SMS Phone</th>
                <th>Lead Source</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </>
  )
}

export default EmailSmsHistoryContent

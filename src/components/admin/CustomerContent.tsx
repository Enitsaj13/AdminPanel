import styles from '@/styles/admin/customer_content.module.scss'
import { VscSearch, VscAdd } from 'react-icons/vsc'
import { IoMdRemoveCircleOutline } from 'react-icons/io'

const Content = () => {
  return (
    <>
      <div className={styles.customers__content__container}>
        <div className={styles.customers}>
          <span className={styles.customers__text}>Customer(s)</span>

          <button className={styles.customers__add__btn}>
            <VscAdd size={14} className={styles.add__icon} />
            Add Customer
          </button>

          <hr className={styles.seperator} />

          <div className={styles.customers_search}>
            <input type='text' placeholder='Name or Email or Phone' />
            <button className={styles.customers__search__btn}>
              Search
              <VscSearch size={14} className={styles.search__icon} />
            </button>
            <br />
            <button className={styles.customers__remove__btn}>
              <IoMdRemoveCircleOutline
                size={15}
                className={styles.remove__icon}
              />
              Bulk Remove
            </button>
          </div>
        </div>
        <div className={styles.customers__table}>
          <table>
            <thead>
              <tr>
                <th>
                  <input type='checkbox' />
                </th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Total Trade-in</th>
                <th>Phone</th>
                <th>Date</th>
                <th>Type</th>
                <th>Actions</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </>
  )
}

export default Content

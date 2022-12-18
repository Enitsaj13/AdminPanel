import styles from '@/styles/admin/email_templates_content.module.scss'
import { VscAdd } from 'react-icons/vsc'
import { FiEdit } from 'react-icons/fi'
import { VscSearch } from 'react-icons/vsc'

const EmailTemplatesContent = () => {
  return (
    <>
      <div className={styles.email__templates__content__container}>
        <div className={styles.email__templates}>
          <span className={styles.email__templates__text}>Email Templates</span>

          <button className={styles.email__templates__add__btn}>
            <VscAdd size={14} className={styles.add__icon} />
            Add New
          </button>

          <hr className={styles.seperator} />
        </div>

        <div className={styles.email__templates__search}>
          <select className={styles.select} name='order_id' id='order_id'>
            {SelectOptions.map((option) => (
              <option key={option.id} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
          <button className={styles.email__templates__search__btn}>
            Search
            <VscSearch size={14} className={styles.search__icon} />
          </button>
        </div>

        <div className={styles.email__templates__table}>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Type</th>
                <th>Subject</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {TableData.map((data) => (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.type}</td>
                  <td>{data.subject}</td>
                  <td>
                    <div>
                      <button
                        className={styles.email__templates__table__edit__btn}
                      >
                        <FiEdit size={14} className={styles.edit__icon} />
                      </button>
                      <button className={styles.status__btn}>
                        {data.status}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {/* </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

// dummy data

const TableData = [
  {
    id: 1,
    type: 'Send Password Reset Link To Customer',
    subject: '{$site_name} | Reset Password',
    status: 'Active',

    action: (
      <>
        <FiEdit />
      </>
    ),
  },
  {
    id: 2,
    type: 'Admin Reply from Order',
    subject: 'Reply from Order (#{$order_id})',
    status: 'Active',

    action: (
      <>
        <FiEdit />
      </>
    ),
  },
  {
    id: 3,
    type: 'New Order Email To Admin',
    subject: 'Admin reply from good offer for that order (#{$order_id})',
    status: 'Active',

    action: (
      <>
        <FiEdit />
      </>
    ),
  },
  {
    id: 4,
    type: 'Contact Form Alert By Customer',
    subject: '{$site_name} | New Order Available',
    status: 'Active',

    action: (
      <>
        <FiEdit />
      </>
    ),
  },
  {
    id: 5,
    type: 'New Order Email To Admin',
    subject: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    status: 'Active',

    action: (
      <>
        <FiEdit />
      </>
    ),
  },
  {
    id: 6,
    type: 'Signup Verification For Email',
    subject: 'Customer reply from offer for this order (#{$order_id})',
    status: 'Active',

    action: (
      <>
        <FiEdit />
      </>
    ),
  },
  {
    id: 7,
    type: 'New Order Email To Admin',
    subject: 'Reply from Order (#{$order_id})',
    status: 'Active',

    action: (
      <>
        <FiEdit />
      </>
    ),
  },
  {
    id: 8,
    type: 'New Order Email To Admin',
    subject: 'Admin reply from good offer for that order (#{$order_id})',
    status: 'Active',

    action: (
      <>
        <FiEdit />
      </>
    ),
  },
  {
    id: 9,
    type: 'New Order Email To Admin',
    subject: '{$site_name} | New Order Available',
    status: 'Active',

    action: (
      <>
        <FiEdit />
      </>
    ),
  },
  {
    id: 10,
    type: 'Customer Profile Edit From Admin',
    subject: 'Quote request form submitted by {$customer_fullname}',
    status: 'Active',

    action: (
      <>
        <FiEdit />
      </>
    ),
  },
]


const SelectOptions = [
  {
    id: 1,
    name: 'Select an option',
    value: '',
  },
  {
    id: 2,
    name: 'To Admin',
    value: 'To Admin',
  },
  {
    id: 3,
    name: 'To Customer',
    value: 'To Customer',
  },
  {
    id: 4,
    name: 'Order Waiting Shipment Status',
    value: 'Order Waiting Shipment Status',
  },
  {
    id: 5,
    name: 'Order Shipped Status',
    value: 'Order Shipped Status',
  },
  {
    id: 6,
    name: 'Order Shipment Problem Status',
    value: 'Order Shipment Problem Status',
  },
  {
    id: 7,
    name: 'Order Returned To Sender Status',
    value: 'Order Returned To Sender Status',
  },
  {
    id: 8,
    name: 'Order Delivered Status',
    value: 'Order Delivered Status',
  },
  {
    id: 9,
    name: 'Order Processed Status',
    value: 'Order Processed Status',
  },
  {
    id: 10,
    name: 'Order Completed Status',
    value: 'Order Completed Status',
  },
  {
    id: 11,
    name: 'Order Expired Status',
    value: 'Order Expired Status',
  },
  {
    id: 12,
    name: 'Order Cancelled Status',
    value: 'Order Cancelled Status',
  },
]

export default EmailTemplatesContent

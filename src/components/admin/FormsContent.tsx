import styles from '@/styles/admin/forms_content.module.scss'
import { VscAdd } from 'react-icons/vsc'
import { FiEdit } from 'react-icons/fi'
import { BsTrash } from 'react-icons/bs'
import { IoSaveOutline } from 'react-icons/io5'

const FormsContent = () => {
  return (
    <>
      <div className={styles.forms__content__container}>
        <div className={styles.forms}>
          <span className={styles.forms__text}>Contact List</span>

          <button className={styles.forms__add__btn}>
            <VscAdd size={14} className={styles.add__icon} />
            Add New
          </button>

          <hr className={styles.seperator} />
        </div>

        <div className={styles.forms__search}>
          <select className={styles.select}>
            {SelectOptions.map((option) => (
              <option key={option.id} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
          <button className={styles.forms__search__btn}>Go</button>
        </div>

        <div className={styles.forms__table}>
          <table>
            <thead>
              {/* map the header */}
              {TableHeader.map((header) => (
                <th>{header}</th>
              ))}
            </thead>
            <tbody>
              {TableData.map((data) => (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.phone}</td>
                  <td>{data.email}</td>
                  <td>{data.order}</td>
                  <td>{data.itemName}</td>
                  <td>{data.subject}</td>
                  <td>{data.message}</td>
                  <td>{data.formType}</td>
                  <td>{data.date}</td>
                  <td>
                    <div>
                      <button className={styles.forms__table__delete__btn}>
                        <BsTrash size={15} className={styles.delete__icon} />
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
    name: 'Arthur Vance',
    phone: '09052630334',
    email: 'arthur@gmail.com',
    order: 'No Data',
    itemName: 'Packages',
    subject: 'Test',
    message: 'This is test..',
    formType: 'Contact',
    date: 'May 13, 2022',

    action: (
      <>
        <FiEdit />
        <BsTrash />
      </>
    ),
  },
  {
    id: 2,
    name: 'Lebron James',
    phone: '09052630323',
    email: 'lbj@gmail.com',
    order: 'No Data',
    itemName: 'Packages',
    subject: 'Test',
    message: 'This is test..',
    formType: 'Contact',
    date: 'May 13, 2022',

    action: (
      <>
        <FiEdit />
        <BsTrash />
      </>
    ),
  },
  {
    id: 3,
    name: 'Kyrie Irving',
    phone: '09052630321',
    email: 'kyrie@gmail.com',
    order: 'No Data',
    itemName: 'Packages',
    subject: 'Test',
    message: 'This is test..',
    formType: 'Contact',
    date: 'May 13, 2022',

    action: (
      <>
        <FiEdit />
        <BsTrash />
      </>
    ),
  },
  {
    id: 4,
    name: 'Kevin Durant',
    phone: '09052630356',
    email: 'kevin@gmail.com',
    order: 'No Data',
    itemName: 'Packages',
    subject: 'Test',
    message: 'This is test..',
    formType: 'Contact',
    date: 'May 13, 2022',

    action: (
      <>
        <FiEdit />
        <BsTrash />
      </>
    ),
  },
  {
    id: 5,
    name: 'Kobe Bryant',
    phone: '09052630234',
    email: 'mamba@gmail.com',
    order: 'No Data',
    itemName: 'Packages',
    subject: 'Test',
    message: 'This is test..',
    formType: 'Contact',
    date: 'May 13, 2022',

    action: (
      <>
        <FiEdit />
        <BsTrash />
      </>
    ),
  },
  {
    id: 6,
    name: 'Michael Jordan',
    phone: '09052630310',
    email: 'airjordan@gmail.com',
    order: 'No Data',
    itemName: 'Packages',
    subject: 'Test',
    message: 'This is test..',
    formType: 'Contact',
    date: 'May 13, 2022',

    action: (
      <>
        <FiEdit />
        <BsTrash />
      </>
    ),
  },
  {
    id: 7,
    name: 'Stephen Curry',
    phone: '09052630313',
    email: 'chefcurry@gmail.com',
    order: 'No Data',
    itemName: 'Packages',
    subject: 'Test',
    message: 'This is test..',
    formType: 'Contact',
    date: 'May 13, 2022',

    action: (
      <>
        <FiEdit />
        <BsTrash />
      </>
    ),
  },
]

// dummy data for the tr tag
const TableHeader = [
  '',
  'Name',
  'Phone',
  'Email',
  'Order No',
  'Item Name',
  'Subject',
  'Message',
  'Form Type',
  'Date',
  'Action',
]

const SelectOptions = [
  {
    id: 1,
    name: 'Header Menu',
    value: '',
  },
  {
    id: 2,
    name: 'Footer Menu Column 1',
    value: 'Footer Menu Column 1',
  },
  {
    id: 3,
    name: 'Footer Menu Column 2',
    value: 'Footer Menu Column 2',
  },
]

export default FormsContent

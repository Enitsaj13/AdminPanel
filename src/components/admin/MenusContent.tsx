import styles from '@/styles/admin/menus_content.module.scss'
import { VscAdd } from 'react-icons/vsc'
import { FiEdit } from 'react-icons/fi'
import { BsTrash } from 'react-icons/bs'
import { IoSaveOutline } from 'react-icons/io5'

const MenusContent = () => {
  return (
    <>
      <div className={styles.menus__content__container}>
        <div className={styles.menus}>
          <span className={styles.menus__text}>Menus</span>

          <button className={styles.menus__add__btn}>
            <VscAdd size={14} className={styles.add__icon} />
            Add New
          </button>

          <hr className={styles.seperator} />
        </div>

        <div className={styles.menus__search}>
          <select className={styles.select}>
            {SelectOptions.map((option) => (
              <option key={option.id} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
          <button className={styles.menus__search__btn}>Go</button>
        </div>

        <div className={styles.menus__table}>
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
                  <td>{data.menuName}</td>
                  <td>{data.parentMenu}</td>
                  <td>{data.pageNumber}</td>
                  <td>
                    <input
                      type='number'
                      className={styles.menus__order__field}
                    />
                  </td>
                  <td>
                    <div>
                      <button className={styles.status__btn}>
                        {data.status}
                      </button>
                      <button className={styles.menus__table__edit__btn}>
                        <FiEdit size={15} className={styles.edit__icon} />
                      </button>
                      <button className={styles.menus__table__delete__btn}>
                        <BsTrash size={15} className={styles.delete__icon} />
                      </button>
                      <button className={styles.menus__table__save__btn}>
                        <IoSaveOutline
                          size={15}
                          className={styles.save__icon}
                        />
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
    menuName: 'Smartphone',
    parentMenu: 'sell',
    pageNumber: 'smartphone',

    status: 'Active',
    action: (
      <>
        <FiEdit />
        <BsTrash />
      </>
    ),
  },
  {
    id: 2,
    menuName: 'Tablet',
    parentMenu: 'sell',
    pageNumber: 'smartphone',

    status: 'Active',
    action: (
      <>
        <FiEdit />
        <BsTrash />
      </>
    ),
  },
  {
    id: 3,
    menuName: 'Laptop',
    parentMenu: 'sell',
    pageNumber: 'smartphone',

    status: 'Active',
    action: (
      <>
        <FiEdit />
        <BsTrash />
      </>
    ),
  },
  {
    id: 4,
    menuName: 'Desktop',
    parentMenu: 'sell',
    pageNumber: 'smartphone',

    status: 'Active',
    action: (
      <>
        <FiEdit />
        <BsTrash />
      </>
    ),
  },
  {
    id: 5,
    menuName: 'Accessories',
    parentMenu: 'sell',
    pageNumber: 'smartphone',

    status: 'Active',
    action: (
      <>
        <FiEdit />
        <BsTrash />
      </>
    ),
  },
  {
    id: 6,
    menuName: 'Smartphone',
    parentMenu: 'sell',
    pageNumber: 'smartphone',

    status: 'Active',

    action: (
      <>
        <FiEdit />
        <BsTrash />
      </>
    ),
  },
  {
    id: 7,
    menuName: 'Smart Watch',
    parentMenu: 'sell',
    pageNumber: 'smartphone',

    status: 'Active',

    action: (
      <>
        <FiEdit />
        <BsTrash />
      </>
    ),
  },
  {
    id: 8,
    menuName: 'Game Console',
    parentMenu: 'sell',
    pageNumber: 'smartphone',

    status: 'Active',
    action: (
      <>
        <FiEdit />
        <BsTrash />
      </>
    ),
  },
  {
    id: 9,
    menuName: 'Speaker',
    parentMenu: 'sell',
    pageNumber: 'smartphone',

    status: 'Active',
    action: (
      <>
        <FiEdit />
        <BsTrash />
      </>
    ),
  },
  {
    id: 1,
    menuName: 'Headphones',
    parentMenu: 'sell',
    pageNumber: 'smartphone',

    status: 'Active',
    action: (
      <>
        <FiEdit />
      </>
    ),
  },
]

// dummy data for the tr tag
const TableHeader = [
  'No.',
  'Menu Name',
  'Parent Menu',
  'Page Name',
  'Order',
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

export default MenusContent

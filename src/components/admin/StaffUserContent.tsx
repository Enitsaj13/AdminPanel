import styles from '@/styles/admin/staff_user_content.module.scss'
import { VscAdd } from 'react-icons/vsc'
import { FiEdit } from 'react-icons/fi'
import { BsTrash } from 'react-icons/bs'

const BlogContent = () => {
  return (
    <>
      <div className={styles.staff__users__content__container}>
        <div className={styles.staff__users}>
          <span className={styles.staff__users__text}>Staff List</span>

          <button className={styles.staff__users__add__btn}>
            <VscAdd size={14} className={styles.add__icon} />
            Add New
          </button>

          <hr className={styles.seperator} />
        </div>

        <div className={styles.staff__users__table}>
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Group</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {TableData.map((data) => (
                <tr key={data.id}>
                  <td>{data.username}</td>
                  <td>{data.email}</td>
                  <td>{data.group}</td>
                  <td>
                    <div>
                      <button className={styles.status__btn}>
                        {data.status}
                      </button>
                      <button className={styles.staff__users__table__edit__btn}>
                        <FiEdit size={15} className={styles.edit__icon} />
                      </button>
                      <button
                        className={styles.staff__users__table__delete__btn}
                      >
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
    username: 'Staff1',
    email: 'staff@gmail.com',
    group: 'Staff',

    status: 'Published',
    action: (
      <>
        <FiEdit />
        <BsTrash />
      </>
    ),
  },
  {
    id: 2,
    username: 'Staff2',
    email: 'staff@gmail.com',
    group: 'Staff',

    status: 'Published',
    action: (
      <>
        <FiEdit />
        <BsTrash />
      </>
    ),
  },
]


export default BlogContent

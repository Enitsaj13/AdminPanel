import styles from '@/styles/admin/blog_content.module.scss'
import { VscAdd } from 'react-icons/vsc'
import { FiEdit } from 'react-icons/fi'
import { BsTrash } from 'react-icons/bs'

const BlogContent = () => {
  return (
    <>
      <div className={styles.blog__content__container}>
        <div className={styles.blog}>
          <span className={styles.blog__text}>Blog List</span>

          <button className={styles.blog__add__btn}>
            <VscAdd size={14} className={styles.add__icon} />
            Add New
          </button>

          <hr className={styles.seperator} />
        </div>

        <div className={styles.blog__table}>
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
                  <td>{data.title}</td>
                  <td>{data.categories}</td>
                  <td>{data.date}</td>
                  <td>
                    <div>
                      <button className={styles.blog__table__edit__btn}>
                        <FiEdit size={15} className={styles.edit__icon} />
                      </button>
                      <button className={styles.blog__table__delete__btn}>
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
    title: 'Why do we use it?',
    categories: 'General, Apple',
    date: 'Jan/08/2022 7:52 am',

    action: (
      <>
        <FiEdit />
        <BsTrash />
      </>
    ),
  },
  {
    id: 2,
    title: 'What is Lorem Ipsum?',
    categories: 'Samsung, General, , Apple',
    date: 'Feb/07/2020 5:03 am',

    action: (
      <>
        <FiEdit />
        <BsTrash />
      </>
    ),
  },
]

// dummy data for the tr tag
const TableHeader = ['#', 'Title', 'Categories', 'Date', 'Action']

export default BlogContent

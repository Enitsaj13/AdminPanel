// next js import
import Image from 'next/image'

// styles import
import styles from '@/styles/admin/faqs_content.module.scss'

// icons import
import { VscAdd } from 'react-icons/vsc'
import { FiEdit } from 'react-icons/fi'
import { BsTrash } from 'react-icons/bs'
import { IoMdRemoveCircleOutline } from 'react-icons/io'
import { AiOutlineQuestionCircle } from 'react-icons/ai'

const DevicesContent = () => {
  return (
    <>
      <div className={styles.header__faqs}>
        <span>
          <AiOutlineQuestionCircle size={40} className={styles.icon} />
        </span>
        <span className={styles.header__text}>
          You can use this shortcode [faqs] in pages for display faqs
        </span>
      </div>

      <div className={styles.faqs__content__container}>
        <div className={styles.faqs}>
          <span className={styles.faqs__text}>Faqs</span>

          <button className={styles.faqs__add__btn}>
            <VscAdd size={14} className={styles.add__icon} />
            Add New
          </button>

          <hr className={styles.seperator} />
        </div>

        <div className={styles.faqs__search}>
          <br />
          <button className={styles.faqs__remove__btn}>
            <IoMdRemoveCircleOutline
              size={15}
              className={styles.remove__icon}
            />
            Bulk Remove
          </button>
        </div>

        <div className={styles.faqs__table}>
          <table>
            <thead>
              <tr>
                <th>
                  <input type='checkbox' className={styles.checkbox} />
                </th>
                <th>Title</th>
                <th>Group</th>
                <th>Order</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {TableData.map((data) => (
                <tr key={data.id}>
                  <td>
                    <input type='checkbox' className={styles.checkbox} />
                  </td>
                  <td>{data.title}</td>

                  <td>{data.group}</td>
                  <td>
                    <input
                      type='number'
                      value={data.order}
                      className={styles.faqs__order__field}
                    />
                  </td>
                  <td>
                    <div>
                      <button className={styles.status__btn}>
                        {data.status}
                      </button>
                      <button className={styles.faqs__table__edit__btn}>
                        <FiEdit size={15} className={styles.edit__icon} />
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
    title: 'Can I purchase this website for my business?',
    group: 'Top 3 Qs',
    order: 1,

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
    title: 'Do these prices auto update with the market?',
    group: 'Top 3 Qs',
    order: 2,

    status: 'Published',
    action: (
      <>
        <FiEdit />
        <BsTrash />
      </>
    ),
  },
  {
    id: 3,
    title: 'Can I edit all this FAQ info?',
    group: 'Device Condition Definitions',
    order: 5,

    status: 'Published',
    action: (
      <>
        <FiEdit />
        <BsTrash />
      </>
    ),
  },
  {
    id: 4,
    title: 'How do the grades work?',
    group: 'Device Condition Definitions',
    order: 4,

    status: 'Published',
    action: (
      <>
        <FiEdit />
        <BsTrash />
      </>
    ),
  },
  {
    id: 5,
    title: 'Are there any shipping costs?',
    group: 'Posting',
    order: 3,

    status: 'Published',
    action: (
      <>
        <FiEdit />
        <BsTrash />
      </>
    ),
  },
  {
    id: 6,
    title: 'Where can I get a Postage Paid label?',
    group: 'Posting',
    order: 2,

    status: 'Published',

    action: (
      <>
        <FiEdit />
        <BsTrash />
      </>
    ),
  },
  {
    id: 7,
    title: 'What types of devices do you buy?',
    group: 'Device Condition Definitions',
    order: 8,

    status: 'Published',

    action: (
      <>
        <FiEdit />
        <BsTrash />
      </>
    ),
  },
  {
    id: 8,
    title: 'How long do I have to send my Device(s) in?',
    group: 'Posting',
    order: 7,

    status: 'Published',
    action: (
      <>
        <FiEdit />
        <BsTrash />
      </>
    ),
  },
  {
    id: 9,
    title: 'I sent my product, has it arrived?',
    group: 'Posting',
    order: 4,

    status: 'Published',
    action: (
      <>
        <FiEdit />
        <BsTrash />
      </>
    ),
  },
  {
    id: 10,
    title: 'What do I do if I have alot of devices?',
    group: 'Posting',
    order: 9,

    status: 'Published',
    action: (
      <>
        <FiEdit />
        <BsTrash />
      </>
    ),
  },
]

export default DevicesContent

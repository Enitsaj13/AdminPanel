// next js import
import Image from 'next/image'

// styles import
import styles from '@/styles/admin/brands_content.module.scss'

// icons import
import { VscAdd, VscSearch } from 'react-icons/vsc'
import { FiEdit } from 'react-icons/fi'
import { BsTrash } from 'react-icons/bs'
import { IoSaveOutline, IoCopyOutline } from 'react-icons/io5'
import { IoMdRemoveCircleOutline } from 'react-icons/io'

// local images import
import microsoft from '@/images/admin_images/microsoft.png'
import apple from '@/images/admin_images/apple.png'
import samsung from '@/images/admin_images/samsung.png'
import google from '@/images/admin_images/google.png'
import motorola from '@/images/admin_images/motorola.png'
import sony from '@/images/admin_images/sony.png'
import htc from '@/images/admin_images/htc.png'
import nokia from '@/images/admin_images/nokia.png'
import huawei from '@/images/admin_images/huawei.png'
import lenovo from '@/images/admin_images/lenovo.png'



const BrandContent = () => {
  return (
    <>
      <div className={styles.brands__content__container}>
        <div className={styles.brands}>
          <span className={styles.brands__text}>Brands</span>

          <button className={styles.brands__add__btn}>
            <VscAdd size={14} className={styles.add__icon} />
            Add New
          </button>

          <hr className={styles.seperator} />
        </div>

        <div className={styles.brands__search}>
          <input
            type='text'
            name=''
            id=''
            placeholder='Title'
            className={styles.search__field}
          />
          <button className={styles.brands__search__btn}>
            Search
            <VscSearch size={14} className={styles.search__icon} />
          </button>

          <br />
          <button className={styles.brands__remove__btn}>
            <IoMdRemoveCircleOutline
              size={15}
              className={styles.remove__icon}
            />
            Bulk Remove
          </button>
        </div>

        <div className={styles.brands__table}>
          <table>
            <thead>
              <tr>
                <th>
                  <input type='checkbox' className={styles.checkbox} />
                </th>
                <th>Image</th>
                <th>Title</th>
                <th>Order</th>
                <th>Actions</th>
              </tr>

            </thead>
            <tbody>
              {TableData.map((data) => (
                <tr key={data.id}>
                  <td>
                    <input type='checkbox' className={styles.checkbox} />
                  </td>
                  <td>
                    <Image
                      src={data.image}
                      alt='device'
                      width={70}
                      height={40}
                    />
                  </td>

                  <td>{data.title}</td>
                  <td>
                    <input
                      type='number'
                      value={data.order}
                      className={styles.brands__order__field}
                    />
                  </td>
                  <td>
                    <div>
                      <button className={styles.status__btn}>
                        {data.status}
                      </button>
                      <button className={styles.brands__table__edit__btn}>
                        <FiEdit size={15} className={styles.edit__icon} />
                      </button>
                      <button className={styles.brands__table__delete__btn}>
                        <BsTrash size={15} className={styles.delete__icon} />
                      </button>
                      <button className={styles.brands__table__save__btn}>
                        <IoSaveOutline
                          size={15}
                          className={styles.save__icon}
                        />
                      </button>
                      <button className={styles.brands__table__copy__btn}>
                        <IoCopyOutline
                          size={15}
                          className={styles.copy__icon}
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
    image: microsoft,
    title: 'Microsoft',
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
    image: apple,
    title: 'Apple',
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
    id: 3,
    image: samsung,
    title: 'Samsung',
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
    image: google,
    title: 'Google',
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
    image: motorola,
    title: 'Motorola',
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
    image: sony,
    title: 'Sony',
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
    image: htc,
    title: 'HTC',
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
    id: 8,
    image: nokia,
    title: 'Nokia',
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
    image: huawei,
    title: 'Huawei',
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
    image: lenovo,
    title: 'Lenovo',
    order: 9,

    status: 'Published',
    action: (
      <>
        <FiEdit />
      </>
    ),
  },
]


export default BrandContent

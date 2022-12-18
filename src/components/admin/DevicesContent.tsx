// next js import
import Image from 'next/image'

// styles import
import styles from '@/styles/admin/devices_content.module.scss'

// icons import
import { VscAdd, VscSearch } from 'react-icons/vsc'
import { FiEdit } from 'react-icons/fi'
import { BsTrash } from 'react-icons/bs'
import { IoSaveOutline, IoCopyOutline } from 'react-icons/io5'
import { IoMdRemoveCircleOutline } from 'react-icons/io'

// local images import
import galaxyS21 from '@/images/admin_images/galaxy12.png'
import vita from '@/images/admin_images/vita.png'
import switches from '@/images/admin_images/switch.png'
import playstation from '@/images/admin_images/playstation.png'
import threeThee from '@/images/admin_images/3ds.png'
import airpods from '@/images/admin_images/airpods.png'
import iphoneX from '@/images/admin_images/iphoneX.png'
import ipad from '@/images/admin_images/iPad.png'
import watch from '@/images/admin_images/Apple Watch.png'
import macbook from '@/images/admin_images/Macbook.png'

const DevicesContent = () => {
  return (
    <>
      <div className={styles.devices__content__container}>
        <div className={styles.devices}>
          <span className={styles.devices__text}>Devices</span>

          <button className={styles.devices__add__btn}>
            <VscAdd size={14} className={styles.add__icon} />
            Add New
          </button>

          <hr className={styles.seperator} />
        </div>

        <div className={styles.devices__search}>
          <input
            type='text'
            name=''
            id=''
            placeholder='Title'
            className={styles.search__field}
          />
          <button className={styles.devices__search__btn}>
            Search
            <VscSearch size={14} className={styles.search__icon} />
          </button>

          <br />
          <button className={styles.devices__remove__btn}>
            <IoMdRemoveCircleOutline
              size={15}
              className={styles.remove__icon}
            />
            Bulk Remove
          </button>
        </div>

        <div className={styles.devices__table}>
          <table>
            <thead>
              <tr>
                <th>
                  <input type='checkbox' className={styles.checkbox} />
                </th>
                <th>Image</th>
                <th>Icon</th>
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
                      height={100}
                      loading='lazy'
                    />
                  </td>
                  <td>
                    <Image
                      src={data.icon}
                      alt='device-icon'
                      width={40}
                      height={60}
                      className={styles.icon_image}
                    />
                  </td>

                  <td>{data.title}</td>
                  <td>
                    <input
                      type='number'
                      value={data.order}
                      className={styles.devices__order__field}
                    />
                  </td>
                  <td>
                    <div>
                      <button className={styles.status__btn}>
                        {data.status}
                      </button>
                      <button className={styles.devices__table__edit__btn}>
                        <FiEdit size={15} className={styles.edit__icon} />
                      </button>
                      <button className={styles.devices__table__delete__btn}>
                        <BsTrash size={15} className={styles.delete__icon} />
                      </button>
                      <button className={styles.devices__table__save__btn}>
                        <IoSaveOutline
                          size={15}
                          className={styles.save__icon}
                        />
                      </button>
                      <button className={styles.devices__table__copy__btn}>
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
    image: galaxyS21,
    icon: galaxyS21,
    title: 'Galaxy S21',
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
    image: airpods,
    icon: airpods,
    title: 'Airpods',
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
    image: switches,
    icon: switches,
    title: 'Nintendo Switch',
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
    image: playstation,
    icon: playstation,
    title: 'Playstation',
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
    image: threeThee,
    icon: threeThee,
    title: 'Nintendo 3DS',
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
    image: vita,
    icon: vita,
    title: 'Playstation Vita',
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
    image: iphoneX,
    icon: iphoneX,
    title: 'iPhone X',
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
    image: ipad,
    icon: ipad,
    title: 'iPad',
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
    image: watch,
    icon: watch,
    title: 'iPhone 12 Mini',
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
    image: macbook,
    icon: macbook,
    title: 'Macbook',
    order: 9,

    status: 'Published',
    action: (
      <>
        <FiEdit />
      </>
    ),
  },
]



export default DevicesContent

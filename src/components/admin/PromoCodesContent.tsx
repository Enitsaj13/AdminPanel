import styles from '@/styles/admin/promo_codes_content.module.scss'
import { VscAdd } from 'react-icons/vsc'
import { FiEdit } from 'react-icons/fi'
import { BsTrash } from 'react-icons/bs'

const PromoCodesContent = () => {
  return (
    <>
      <div className={styles.promo__codes__content__container}>
        <div className={styles.promo__codes}>
          <span className={styles.promo__codes__text}>Promo Codes</span>

          <button className={styles.promo__codes__add__btn}>
            <VscAdd size={14} className={styles.add__icon} />
            Add New
          </button>

          <hr className={styles.seperator} />
        </div>
        <div className={styles.promo__codes__table}>
          <table>
            <thead>
              {/* mapp the header */}
              {TableHeader.map((header) => (
                <th>{header}</th>
              ))}
            </thead>
            <tbody>
              {TableData.map((data) => (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.code}</td>
                  <td>{data.fromDate}</td>
                  <td>{data.expireDate}</td>
                  <td>{data.discount}</td>
                  <td>
                    <div>
                      <button className={styles.status__btn}>
                        {data.status}
                      </button>
                      <button className={styles.promo__codes__table__edit__btn}>
                        <FiEdit size={14} className={styles.edit__icon} />
                      </button>
                      <button
                        className={styles.promo__codes__table__delete__btn}
                      >
                        <BsTrash size={14} className={styles.delete__icon} />
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
    code: 'FFDHD45',
    fromDate: '10/10/2022',
    expireDate: '10/10/2023',
    discount: '10%',
    status: 'Inactive',
    action: (
      <>
        <FiEdit />
        <BsTrash />
      </>
    ),
  },
  {
    id: 2,
    code: 'DFHDFH5',
    fromDate: '10/10/2022',
    expireDate: '10/10/2023',
    discount: '15%',
    status: 'Inactive',
    action: (
      <>
        <FiEdit />
        <BsTrash />
      </>
    ),
  },
  {
    id: 3,
    code: 'JETHEE74',
    fromDate: '10/10/2022',
    expireDate: '10/10/2023',
    discount: '20%',
    status: 'Inactive',
    action: (
      <>
        <FiEdit />
        <BsTrash />
      </>
    ),
  },
  {
    id: 4,
    code: 'THTHE36',
    fromDate: '10/10/2022',
    expireDate: '10/10/2023',
    discount: '25%',
    status: 'Inactive',
    action: (
      <>
        <FiEdit />
        <BsTrash />
      </>
    ),
  },
  {
    id: 5,
    code: 'NHDFHR64',
    fromDate: '10/10/2022',
    expireDate: '10/10/2023',
    discount: '30%',
    status: 'Inactive',
    action: (
      <>
        <FiEdit />
        <BsTrash />
      </>
    ),
  },
  {
    id: 6,
    code: 'MRHDFE35',
    fromDate: '10/10/2022',
    expireDate: '10/10/2023',
    discount: '10%',
    status: 'Inactive',
    action: (
      <>
        <FiEdit />
        <BsTrash />
      </>
    ),
  },
  {
    id: 7,
    code: 'BDFHDFH5',
    fromDate: '10/10/2022',
    expireDate: '10/10/2023',
    discount: '15%',
    status: 'Inactive',
    action: (
      <>
        <FiEdit />
        <BsTrash />
      </>
    ),
  },
  {
    id: 8,
    code: 'DHDHDH14',
    fromDate: '10/10/2022',
    expireDate: '10/10/2023',
    discount: '20%',
    status: 'Inactive',
    action: (
      <>
        <FiEdit />
        <BsTrash />
      </>
    ),
  },
  {
    id: 9,
    code: 'SCSHES87',
    fromDate: '10/10/2022',
    expireDate: '10/10/2023',
    discount: '25%',
    status: 'Inactive',
    action: (
      <>
        <FiEdit />
        <BsTrash />
      </>
    ),
  },
  {
    id: 10,
    code: 'PSDGSER51',
    fromDate: '10/10/2022',
    expireDate: '10/10/2023',
    discount: '30%',
    status: 'Inactive',
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
  'ID',
  'Promo Code',
  'From Date',
  'Expire Date',
  'Discount',
  'Action',
]

export default PromoCodesContent

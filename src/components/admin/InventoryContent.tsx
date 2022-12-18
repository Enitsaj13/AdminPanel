import styles from '@/styles/admin/inventory_content.module.scss'
import { VscSearch } from 'react-icons/vsc'
import { IoMdRemoveCircleOutline } from 'react-icons/io'

// dummy data for the select tag
const SelectData = [
  {
    id: 1,
    option: (
      <>
        <option> - Brands - </option>
        <option value='Apple'>Apple</option>
      </>
    ),
  },
  {
    id: 2,
    option: (
      <>
        <option> - Models - </option>
        <option value='iPhone 12 Pro Max'>iPhone 12 Pro Max</option>
      </>
    ),
  },
  {
    id: 3,
    option: (
      <>
        <option> - Storage - </option>
        <option value='256GB'>256GB</option>
      </>
    ),
  },
  {
    id: 4,
    option: (
      <>
        <option> - Carrier - </option>
        <option value='AT&T'>AT&T</option>
      </>
    ),
  },
  {
    id: 5,
    option: (
      <>
        <option> - ESN - </option>
        <option value='123456789'>123456789</option>
      </>
    ),
  },
  {
    id: 6,
    option: (
      <>
        <option> - Condition - </option>
        <option value='Good'>Good</option>
      </>
    ),
  },
  {
    id: 7,
    option: (
      <>
        <option> - LCD Burn - </option>
        <option value='No'>No</option>
      </>
    ),
  },
  {
    id: 8,
    option: (
      <>
        <option> - Processor - </option>
        <option value='A14 Bionic'>A14 Bionic</option>
      </>
    ),
  },
  {
    id: 9,
    option: (
      <>
        <option> - Screen Size - </option>
      </>
    ),
  },
  {
    id: 10,
    option: (
      <>
        <option> - Year - </option>
        <option value='2020'>2020</option>
      </>
    ),
  },
  {
    id: 11,
    option: (
      <>
        <option> - Ram Memory- </option>
        <option value='6GB'>6GB</option>
      </>
    ),
  },
  {
    id: 12,
    option: (
      <>
        <option> - Battery- </option>
        <option value='Good'>Good</option>
      </>
    ),
  },
  {
    id: 13,
    option: (
      <>
        <option> - Connectivity- </option>
        <option value='Good'>Good</option>
      </>
    ),
  },
  {
    id: 14,
    option: (
      <>
        <option> - Case Type- </option>
        <option value='Good'>Good</option>
      </>
    ),
  },
  {
    id: 15,
    option: (
      <>
        <option> - Case Size- </option>
        <option value='Good'>Good</option>
      </>
    ),
  },
]

// dummy data for the table header

const TableHeader = [
  'ID',
  'Order ID',
  'Brand',
  'Model',
  'Condition',
  'Paid',
  'Bonus',
  'Action',
]

const InventoryContent = () => {
  return (
    <>
      <div className={styles.inventory__content}>
        <div className={styles.inventory__content__container}>
          <div className={styles.inventory}>
            <div className={styles.inventory__btn}>
              <button className={styles.inventory__stock__btn}>In Stock</button>
              <button className={styles.inventory__ship__btn}>
                Shipped to UA
              </button>
              <button className={styles.inventory__sold__btn}>Sold</button>
            </div>

            <hr className={styles.seperator} />

            <div className={styles.inventory_search}>
              <form action='' className={styles.inventory__form}>
                {/* map the select data */}
                {SelectData.map((data) => (
                  <select name='' id='' key={data.id}>
                    {data.option}
                  </select>
                ))}

                <button className={styles.inventory__search__btn}>
                  Search
                  <VscSearch size={14} className={styles.search__icon} />
                </button>
              </form>

              <button className={styles.inventory__remove__btn}>
                <IoMdRemoveCircleOutline
                  size={15}
                  className={styles.remove__icon}
                />
                Bulk Remove
              </button>
            </div>
          </div>
          <div className={styles.inventory__table}>
            <table>
              <thead>
                <tr>
                  <th>
                    <input type='checkbox' className={styles.checkbox} />
                  </th>
                  {/* map the table header */}
                  {TableHeader.map((header) => (
                    <th key={header}>{header}</th>
                  ))}
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default InventoryContent

import styles from './index.module.css'
import Search from "antd/es/input/Search";
import {Button} from "antd";


const SearchHeader = ({

}) => {
    let onSearch;
    return(
      <div className={styles.header}>
          <div className={styles.logo}>
              <h1>LOGO</h1>
          </div>
          <Button type="primary">Новая заявка</Button>
        <div className={styles.search}>
            <Search placeholder="input search text" onSearch={onSearch} enterButton />
        </div>
      </div>
    );
}

export default SearchHeader
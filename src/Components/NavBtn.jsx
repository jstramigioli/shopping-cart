import { Link } from "react-router-dom"
import styles from './NavBtn.module.css'

function NavBtn({to}) {
    return (
        <Link to={to} className={styles.btn}>{to}</Link>
    )
}

export default NavBtn
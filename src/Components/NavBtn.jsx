import { Link } from "react-router-dom"
import styles from './NavBtn.module.css'
import PropTypes from "prop-types"

function NavBtn({to}) {
    return (
        <Link to={to} className={styles.btn}>{to}</Link>
    )
}

NavBtn.propTypes = {
    to: PropTypes.string
}

export default NavBtn
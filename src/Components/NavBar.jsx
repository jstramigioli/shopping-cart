import NavBtn from './NavBtn'
import styles from './NavBar.module.css'

function NavBar() {
    return (
        <nav className={styles.nav}>
            <NavBtn to='home'></NavBtn>
            <NavBtn to='shop'></NavBtn>
        </nav>
    )
}

export default NavBar
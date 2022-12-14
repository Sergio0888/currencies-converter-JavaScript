import { NavLink } from "react-router-dom";
import items from "./items";
import styles from './NavbarMenu.module.scss';

const NavbarMenu = () => {

    const getClassName = ({isActive}) => {
        return isActive ? `${styles.link} ${styles.isActive}` : styles.link
    };

    const elements = items.map(({id, text, to}) => (
            <li className={styles.item} key={id}>
                <NavLink className={getClassName} to={to} end>{text}</NavLink>
            </li>
        ))
    return (
        <ul className={styles.list}>
            {elements}
        </ul>
    )
};

export default NavbarMenu;
import styles from './MenuLink.module.css';
import { NavLink } from "react-router-dom";

const MenuLink = ({children, to}) => {
    return (
        <NavLink to={to} className={({isActive}) => {
            return `
            ${styles.link}
            ${isActive ? styles.activeLink : ''}
            `
        }}>
            {children}
        </NavLink>
    )
}

export default MenuLink;
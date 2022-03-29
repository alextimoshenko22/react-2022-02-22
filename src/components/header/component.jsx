import { ReactComponent as Logo } from '../../icons/logo.svg';
import styles from './styles.module.css';
import { Login } from '../login/component';

export const Header = () => {
    return (
        <header className={styles.header}>
            <Logo className={styles.logo}/>
            <Login />
        </header>
    )
};

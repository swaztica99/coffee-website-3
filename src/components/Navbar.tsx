import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>MÖMENTO.</div>
            <ul className={styles.navLinks}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/menu">Menu</Link></li>
                <li><Link href="/#about">About</Link></li>
                <li><Link href="https://wa.me/081809811311">Contact</Link></li>
            </ul>
        </nav>
    );
}
"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Tutup menu saat berpindah halaman
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Kunci scroll body saat menu mobile terbuka
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href="/">MÖMÉNTO.</Link>
            </div>

            {/* Navigasi Desktop */}
            <ul className={styles.desktopLinks}>
                <li><Link href="/#about">About</Link></li>
                <li><Link href="/menu">Menu</Link></li>
                <li><Link href="/#location">Contact</Link></li>
            </ul>

            {/* Tombol Hamburger */}
            <button
                className={`${styles.hamburger} ${isOpen ? styles.active : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle Menu"
            >
                <span className={styles.line}></span>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
            </button>

            {/* Menu Mobile (Overlay) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={styles.mobileOverlay}
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        <ul className={styles.mobileLinks}>
                            <li><Link href="/#about" onClick={toggleMenu}>About</Link></li>
                            <li><Link href="/menu" onClick={toggleMenu}>Menu</Link></li>
                            <li><Link href="/#location" onClick={toggleMenu}>Contact</Link></li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
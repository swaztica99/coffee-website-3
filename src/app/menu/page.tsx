"use client";
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { allMenus, MenuItem } from '@/data/menuData';
import MenuModal from '@/components/MenuModal';
import styles from './menu.module.css';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function MenuPage() {
    const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
    const [activeCategory, setActiveCategory] = useState<'all' | 'coffee' | 'non-coffee' | 'food'>('all');

    // Logika Filter
    const filteredMenus = activeCategory === 'all'
        ? allMenus
        : allMenus.filter(item => item.category === activeCategory);

    const categories = [
        { id: 'all', label: 'ALL MENU' },
        { id: 'coffee', label: 'COFFEE' },
        { id: 'non-coffee', label: 'NON-COFFEE' },
        { id: 'food', label: 'FOOD' },
    ];

    return (
        <main className={styles.menuMain}>
            <Navbar />

            <header className={styles.header}>
                <h1 className={styles.title}>OUR MENU</h1>

                {/* Tab Kategori */}
                <div className={styles.tabContainer}>
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id as any)}
                            className={`${styles.tabBtn} ${activeCategory === cat.id ? styles.activeTab : ''}`}
                        >
                            {cat.label}
                            {activeCategory === cat.id && (
                                <motion.div layoutId="underline" className={styles.underline} />
                            )}
                        </button>
                    ))}
                </div>
            </header>

            <div className={styles.container}>
                <motion.div layout className={styles.grid}>
                    <AnimatePresence mode="popLayout">
                        {filteredMenus.map((item) => (
                            <motion.div
                                key={item.id}
                                layout // Properti ini yang biasanya bertabrakan dengan CSS transform
                                whileHover={{ y: -15 }} // Gantikan hover CSS dengan ini
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{
                                    duration: 0.01,
                                    type: "tween", // Gunakan tween agar gerakannya linear dan bersih
                                    ease: "easeOut"
                                }}
                                className={styles.card}
                                onClick={() => setSelectedItem(item)}
                            >
                                <div className={styles.imageBox}>
                                    <Image src={item.image} alt={item.name} width={400} height={400} className={styles.img} />
                                </div>
                                <div className={styles.info}>
                                    <h3>{item.name}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            <AnimatePresence>
                {selectedItem && (
                    <MenuModal item={selectedItem} onClose={() => setSelectedItem(null)} />
                )}
            </AnimatePresence>

            <footer className={styles.footer}>
                <p>© 2026 MÖMÉNTO CAFE. ALL RIGHTS RESERVED.</p>
            </footer>
        </main>
    );
}
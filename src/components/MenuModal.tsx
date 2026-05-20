"use client";
import { motion } from "framer-motion";
import Image from 'next/image';
import styles from './MenuModal.module.css';
import { MenuItem } from '@/data/menuData';

interface ModalProps {
    item: MenuItem;
    onClose: () => void;
}

export default function MenuModal({ item, onClose }: ModalProps) {
    return (
        // Overlay (Latar belakang gelap)
        <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            {/* Modal Box (Kotak Putih) */}
            <motion.div
                className={styles.modal}
                initial={{ opacity: 0, scale: 0.8, y: 40 }} // Muncul dari bawah & agak kecil
                animate={{ opacity: 1, scale: 1, y: 0 }}    // Menuju posisi normal
                exit={{ opacity: 0, scale: 0.8, y: 40 }}    // Menghilang ke bawah lagi
                transition={{ type: "spring", damping: 25, stiffness: 300 }} // Efek pegas halus
                onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup saat konten diklik
            >
                <button className={styles.closeBtn} onClick={onClose}>×</button>
                <div className={styles.content}>
                    <div className={styles.imageSide}>
                        <Image src={item.image} alt={item.name} width={400} height={400} className={styles.img} />
                    </div>
                    <div className={styles.infoSide}>
                        <h2 className={styles.name}>{item.name}</h2>
                        <span className={styles.price}>{item.price}</span>
                        <p className={styles.desc}>{item.description}</p>
                        <button className={styles.orderBtn}>Order via WhatsApp</button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
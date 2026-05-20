"use client";
import { useState } from 'react';
import { motion } from "framer-motion";
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import styles from './page.module.css';
import { allMenus, MenuItem } from '@/data/menuData';
import { AnimatePresence } from 'framer-motion';
import MenuModal from '@/components/MenuModal';
import Link from 'next/link';

export default function Home() {

  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  // Ambil hanya 3 menu untuk highlight
  const highlights = allMenus.slice(0, 3);
  return (
    <main className={styles.main}>
      <Navbar />

      {/* SECTION 1: HERO (Cream) - Dibuat Sticky agar diam saat di-scroll awal */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.bigTitle}>MÖMENTO.</h1>

          {/* Wrapper gambar tangan */}
          <div className={styles.imageWrapper}>
            <Image
              src="/hand-hero2.png"
              alt="Hand holding coffee"
              width={600}
              height={800}
              priority
              className={styles.coffeeImg}
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT (Biru) - Dibuat Z-index lebih tinggi untuk menutupi Hero */}
      <section id="about" className={styles.aboutSection}>
        <motion.div
          className={styles.aboutContainer}
          initial={{ opacity: 0, y: 50 }} // Posisi awal (transparan & agak ke bawah)
          whileInView={{ opacity: 1, y: 0 }} // Posisi saat terlihat di layar
          viewport={{ once: true, margin: "-100px" }} // Animasi jalan sekali saat sudah masuk 100px
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className={styles.aboutContent}>
            <h2 className={styles.aboutTitle}>OUR STORY</h2>
            <p className={styles.aboutText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>
          <div className={styles.aboutImageSide}>
            <Image
              src="/location2.jpg"
              alt="Cafe"
              width={500}
              height={400}
              className={styles.buildingImg}
            />
          </div>
        </motion.div>
      </section>

      <section id="menu" className={styles.highlightSection}>
        <h2 className={styles.highlightTitle}>OUR HIGHLIGHT</h2>
        <div className={styles.menuGrid}>
          {highlights.map((item) => (
            <div key={item.id} className={styles.menuCard} onClick={() => setSelectedItem(item)}>
              <div className={styles.menuImageBox}>
                <Image src={item.image} alt={item.name} width={400} height={400} className={styles.menuImage} />
              </div>
              <h3 className={styles.menuItemName}>{item.name}</h3>
            </div>
          ))}
        </div>
        <div className={styles.buttonCenterWrapper}>
          <Link href="/menu" className={styles.moreMenuBtn}>MORE MENU</Link>
        </div>
      </section>

      {/* Tampilkan Modal jika ada item yang dipilih */}
      <AnimatePresence>
        {selectedItem && (
          <MenuModal item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </AnimatePresence>

      <section id="location" className={styles.locationSection}>
        <div className={styles.locationContainer}>
          {/* Kolom Kiri: Informasi */}
          <div className={styles.locationInfo}>
            <h2 className={styles.locationTitle}>FIND US</h2>

            <div className={styles.locationDetail}>
              <div className={styles.detailGroup}>
                <h3>ADDRESS</h3>
                <p>Jl. Senopati No. 123, Jakarta Selatan,<br />DKI Jakarta 12190</p>
              </div>

              <div className={styles.detailGroup}>
                <h3>HOURS</h3>
                <p>Mon - Fri : 08.00 - 21.00</p>
                <p>Sat - Sun : 09.00 - 22.00</p>
              </div>

              <div className={styles.detailGroup}>
                <h3>CONTACT</h3>
                <p>hello@momento.com</p>
                <p>+62 812 3456 7890</p>
              </div>
            </div>

            <Link href="https://www.google.com/maps/" className={styles.directionBtn}>GET DIRECTIONS</Link>
          </div>

          {/* Kolom Kanan: Gambar/Map */}
          <div className={styles.locationMapBox}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.267208624124!2d106.80556277587425!3d-6.228459460999564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f145465e903f%3A0xc3543d2c67c5144b!2sSenopati!5e0!3m2!1sid!2sid!4v1715950000000!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Momentum Cafe Location"
              className={styles.googleMap}
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer Sederhana */}
      <footer className={styles.footer}>
        <p>© 2026 MÖMENTO CAFE. ALL RIGHTS RESERVED.</p>
      </footer>
    </main>
  );
}
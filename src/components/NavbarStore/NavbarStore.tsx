"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import styles from "./NavbarStore.module.css";
import {
  Menu,
  X,
  QrCode,
  Music,
  Calendar,
  Ticket,
  Mic,
  MapPin,
  Music2 as NoteIcon,
  Guitar,
  Camera,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

export default function NavbarStore() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const carouselHeight = parseInt(
        getComputedStyle(document.documentElement)
          .getPropertyValue("--carousel-height")
          .replace("px", "")
      );
      setScrolled(window.scrollY > carouselHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const slides = [
    { Icon: Music, label: "Conciertos" },
    { Icon: Calendar, label: "Eventos" },
    { Icon: Ticket, label: "Entradas" },
    { Icon: Mic, label: "Shows" },
    { Icon: MapPin, label: "Ubicaciones" },
  ];

  const socialLinks = [
    { href: "https://facebook.com/tuPagina", Icon: FaFacebookF },
    { href: "https://instagram.com/tuPerfil", Icon: FaInstagram },
    { href: "https://youtube.com/tuCanal", Icon: FaYoutube },
    { href: "https://tiktok.com/@tuUsuario", Icon: FaTiktok },
  ];

  const navItems = [
    { href: "/store", label: "Inicio" },
    { href: "/store/eventos", label: "Eventos" },
    { href: "/store/cursos", label: "Cursos" },
    { href: "/store/tienda", label: "Tienda", Icon: Guitar },
    { href: "/store/galeria", label: "Galería", Icon: Camera },
    { href: "/store/nosotros", label: "Nosotros" },
    { href: "/store/contacto", label: "Contacto" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <NoteIcon className={styles.logoIcon} />
          <span className={styles.logoText}>LOGO GRUPO</span>
        </div>

        <div className={styles.navLinks}>
          {navItems.map(({ href, label, Icon }, idx) => (
            <Link key={idx} href={href} className={styles.navLink}>
              {Icon && <Icon size={18} />}
              {label}
            </Link>
          ))}
        </div>

        <div
          className={styles.hamburger}
          onClick={() => setSidebarOpen(o => !o)}
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </nav>

      {/* Carrusel */}
      <div className={styles.carouselContainer}>
        <Marquee gradient={false} speed={60} pauseOnHover>
          {slides.map(({ Icon, label }, idx) => (
            <div className={styles.carouselItem} key={idx}>
              <Icon size={24} />
              <div className={styles.carouselLabel}>{label}</div>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Social Sidebar */}
      <aside
        className={`${styles.socialSidebar} ${
          scrolled ? styles.scrolled : ""
        }`}
      >
        {socialLinks.map(({ href, Icon }, idx) => (
          <a
            key={idx}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon size={24} />
          </a>
        ))}
      </aside>

      {/* Sidebar móvil */}
      <aside
        className={`${styles.sidebar} ${
          sidebarOpen ? styles.open : ""
        }`}
      >
        {navItems.map(({ href, label, Icon }, idx) => (
          <Link
            key={idx}
            href={href}
            className={styles.menuLink}
            onClick={() => setSidebarOpen(false)}
          >
            {Icon && <Icon size={20} />}
            {label}
          </Link>
        ))}

        <div className={styles.divider} />

        <div className={styles.socialMobileMenu}>
          {socialLinks.map(({ href, Icon }, idx) => (
            <a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon size={24} />
            </a>
          ))}
        </div>

        <button className={styles.qrBtn}>
          <QrCode size={18} />
          Ver QR
        </button>
      </aside>

      {/* Floating Actions */}
      <div className={styles.floatingActions}>
        <button className={styles.floatingBtn} aria-label="Ver QR">
          <QrCode size={22} />
        </button>
        <a
          className={`${styles.floatingBtn} ${styles.whatsappBtn}`}
          href="https://wa.me/591XXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <FaWhatsapp size={22} />
        </a>
      </div>
    </>
  );
}

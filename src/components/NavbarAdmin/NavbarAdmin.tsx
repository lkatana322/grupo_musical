"use client";

import React from "react";
import { User } from "lucide-react";
import styles from "./NavbarAdmin.module.css";

export default function NavbarAdmin() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span className={styles.icon}>🎵</span>
        <span className={styles.title}>LOGO GRUPO</span>
      </div>
      <button className={styles.profileBtn} aria-label="Perfil">
        <User size={20} />
      </button>
    </nav>
  );
}

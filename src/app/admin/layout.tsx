"use client";

import React from "react";
import NavbarAdmin from "@/components/NavbarAdmin/NavbarAdmin";
import SidebarAdmin from "@/components/SidebarAdmin/SidebarAdmin";
import styles from "./layout.module.css";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.adminWrapper}>
      {/* Navbar fijo arriba */}
      <NavbarAdmin />

      {/* Sidebar (desktop) y Barra móvil (mobile) */}
      <SidebarAdmin />

      {/* Contenido principal */}
      <main className={styles.mainArea}>{children}</main>
    </div>
  );
}

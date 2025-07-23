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

      <div className={styles.adminContent}>
        {/* Sidebar lateral: sólo en desktop */}
        <aside className={styles.desktopSidebar}>
          <SidebarAdmin />
        </aside>

        {/* Contenido principal justo bajo el navbar y a la derecha del sidebar */}
        <main className={styles.mainArea}>{children}</main>
      </div>

      {/* == Barra inferior sólo en mobile == */}
      <div className={styles.mobileSidebar}>
        <SidebarAdmin />
      </div>
    </div>
  );
}

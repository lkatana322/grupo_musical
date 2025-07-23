import React from "react";
import NavbarStore from "@/components/NavbarStore/NavbarStore";
import styles from "./layout.module.css";

export default function StoreLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.storeWrapper}>
      <NavbarStore />
      <main className={styles.storeMain}>{children}</main>
    </div>
  );
}

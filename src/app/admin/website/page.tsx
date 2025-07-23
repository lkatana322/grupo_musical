"use client";

import React from "react";
import styles from "./page.module.css";

export default function AdminWebsite() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Administrar Página Web</h1>

      <p className={styles.description}>
        En esta sección podrás gestionar todo el contenido público de tu sitio:
      </p>

      <ul className={styles.featuresList}>
        <li>
          <strong>Videos e Imágenes:</strong> Sube o elimina multimedia para galerías y banners.
        </li>
        <li>
          <strong>Cursos y Servicios:</strong> Crea, edita o desactiva cursos, talleres y publica servicios de organización de eventos.
        </li>
        <li>
          <strong>Productos de Tienda:</strong> Añade instrumentos, establece precios y stock.
        </li>
        <li>
          <strong>Código QR de Pagos:</strong> Actualiza el QR utilizado para reservas y pagos online.
        </li>
      </ul>

      <button className={styles.ctaBtn}>Ir a configuración avanzada →</button>
    </div>
  );
}

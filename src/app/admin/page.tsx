// src/app/admin/page.tsx
"use client";

import { Calendar, MapPin, Music2 } from "lucide-react";
import styles from "./page.module.css";

type Tocada = {
  id: string;
  fecha: string;
  evento: string;
  ciudad: string;
  recinto: string;
};

const proximasTocadas: Tocada[] = [
  { id: "1", fecha: "2025‑08‑10", evento: "Concierto de Verano",   ciudad: "Ciudad A", recinto: "Sala Principal" },
  { id: "2", fecha: "2025‑08‑15", evento: "Recital Nocturno",      ciudad: "Ciudad B", recinto: "Teatro Central" },
  { id: "3", fecha: "2025‑08‑22", evento: "Gala Musical",          ciudad: "Ciudad C", recinto: "Foro Cultural" },
  { id: "4", fecha: "2025‑08‑30", evento: "Festival Anual",        ciudad: "Ciudad D", recinto: "Parque Escénico" },
  { id: "5", fecha: "2025‑09‑05", evento: "Muestra de Talentos",   ciudad: "Ciudad E", recinto: "Auditorio X" },
];

export default function AdminHome() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        Próximas Tocadas: “Este contenido mostrará lo que es prioritario según sus requerimientos”
      </h1>

      <div className={styles.grid}>
        {proximasTocadas.map(({ id, fecha, evento, ciudad, recinto }) => (
          <div key={id} className={styles.card}>
            {/* Header con fecha */}
            <div className={styles.cardHeader}>
              <Calendar size={20} />
              <span className={styles.dateText}>{fecha}</span>
            </div>

            {/* Cuerpo con título + ciudad + recinto */}
            <div className={styles.cardBody}>
              <div className={styles.eventTitle}>
                <Music2 size={18} style={{ verticalAlign: "middle", marginRight: 4 }} />
                {evento}
              </div>
              <div className={styles.infoLine}>
                <MapPin size={16} /> {ciudad}
              </div>
              <div className={styles.infoLine}>
                <MapPin size={16} /> {recinto}
              </div>
            </div>

            {/* Footer con botón inactivo */}
            <div className={styles.cardFooter}>
              <button
                type="button"
                className={styles.detailsBtn}
                onClick={(e) => e.preventDefault()}
              >
                Ver Detalles
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

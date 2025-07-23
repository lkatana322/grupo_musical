// src/components/SidebarAdmin/SidebarAdmin.tsx
"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import {
  Home,
  Mic,
  User,
  Guitar,
  CalendarPlus,
  DollarSign,
  BookOpen,
  List,
  Globe,
} from "lucide-react";
import styles from "./SidebarAdmin.module.css";

type Element =
  | { type: "sep" }
  | { type: "item"; href: string; label: string; Icon: React.ComponentType<{ size?: number }> };

const elements: Element[] = [
  { type: "item", href: "/admin", label: "Dashboard", Icon: Home },
  { type: "sep" },

  { type: "item", href: "/admin/tocadas", label: "Tocadas", Icon: Mic },
  { type: "sep" },

  { type: "item", href: "/admin/integrantes", label: "Integrantes", Icon: User },
  { type: "item", href: "/admin/instrumentos", label: "Instrumentos", Icon: Guitar },
  { type: "sep" },

  { type: "item", href: "/admin/eventos", label: "Gestión Eventos", Icon: CalendarPlus },
  { type: "item", href: "/admin/ingresos", label: "Ingresos", Icon: DollarSign },
  { type: "item", href: "/admin/tienda", label: "Tienda", Icon: Guitar },
  { type: "item", href: "/admin/usuarios", label: "Usuarios", Icon: User },
  { type: "sep" },

  { type: "item", href: "/admin/cursos", label: "Cursos", Icon: BookOpen },
  { type: "item", href: "/admin/inscripciones", label: "Inscripciones", Icon: List },
  { type: "sep" },

  { type: "item", href: "/admin/website", label: "Administrar Web", Icon: Globe },
  { type: "sep" },
];

export default function SidebarAdmin() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      setAtStart(el.scrollLeft <= 0);
      setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current!;
    el.scrollBy({
      left: (dir === "left" ? -1 : 1) * el.clientWidth * 0.8,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* SIDEBAR DESKTOP */}
      <aside className={styles.desktopSidebar}>
        {elements.map((e, i) =>
          e.type === "sep" ? (
            <div key={i} className={styles.separatorDesktop} />
          ) : (
            <Link key={i} href={e.href} className={styles.menuItemDesktop}>
              <e.Icon size={18} />
              <span>{e.label}</span>
            </Link>
          )
        )}
      </aside>

      {/* BARRA MÓVIL INFERIOR */}
      <div className={styles.mobileMenuBar}>
        <div className={styles.scrollWrapper}>
          <button
            className={`${styles.navBtn} ${styles.left}`}
            onClick={() => scroll("left")}
            disabled={atStart}
            aria-label="Anterior"
          >
            ‹
          </button>

          <div ref={scrollRef} className={styles.scrollContainer}>
            {elements.map((e, i) =>
              e.type === "sep" ? (
                <div key={i} className={styles.separator}>
                  <div className={styles.line} />
                  <div className={styles.line} />
                </div>
              ) : (
                <Link key={i} href={e.href} className={styles.menuItem}>
                  <e.Icon size={20} />
                  <span>{e.label}</span>
                </Link>
              )
            )}
          </div>

          <button
            className={`${styles.navBtn} ${styles.right}`}
            onClick={() => scroll("right")}
            disabled={atEnd}
            aria-label="Siguiente"
          >
            ›
          </button>
        </div>
      </div>
    </>
  );
}

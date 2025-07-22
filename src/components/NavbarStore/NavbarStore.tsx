// src/components/NavbarStore.tsx
import Link from 'next/link';

export default function NavbarStore() {
  return (
    <nav style={{ padding: 16, background: '#222', color: '#fff' }}>
      <Link href="/store" style={{ marginRight: 12 }}>Inicio</Link>
      <Link href="/store/nosotros" style={{ marginRight: 12 }}>Nosotros</Link>
      <Link href="/store/instrumentos" style={{ marginRight: 12 }}>Instrumentos</Link>
      <Link href="/store/discos" style={{ marginRight: 12 }}>Discos</Link>
      <Link href="/store/contacto">Contacto</Link>
    </nav>
  );
}

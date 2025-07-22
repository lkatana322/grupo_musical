import Link from 'next/link';

export default function NavbarAdmin() {
  return (
    <header style={{ padding: 16, background: '#004', color: '#fff' }}>
      <Link href="/admin" style={{ marginRight: 12 }}>Dashboard</Link>
      <Link href="/admin/usuarios" style={{ marginRight: 12 }}>Usuarios</Link>
      <Link href="/admin/config">Configuración</Link>
    </header>
  );
}

import Link from 'next/link';

export default function SidebarAdmin() {
  return (
    <aside style={{ width: 200, padding: 16, background: '#eef', height: '100vh' }}>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>
          <Link href="/admin" style={{ display: 'block', padding: '8px 0' }}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/admin/usuarios" style={{ display: 'block', padding: '8px 0' }}>
            Usuarios
          </Link>
        </li>
        <li>
          <Link href="/admin/config" style={{ display: 'block', padding: '8px 0' }}>
            Configuración
          </Link>
        </li>
      </ul>
    </aside>
  );
}

// src/app/admin/layout.tsx
import NavbarAdmin  from '@/components/NavbarAdmin/NavbarAdmin';
import SidebarAdmin from '@/components/SidebarAdmin/SidebarAdmin';
import Footer       from '@/components/Footer/Footer';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex' }}>
      <SidebarAdmin />
      <div style={{ flex: 1 }}>
        <NavbarAdmin />
        <main style={{ padding: 24 }}>{children}</main>
        <Footer />
      </div>
    </div>
  );
}

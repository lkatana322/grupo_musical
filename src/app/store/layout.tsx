import NavbarStore from '@/components/NavbarStore/NavbarStore';
import Footer from '@/components/Footer/Footer';

export default function StoreLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavbarStore />
      <main style={{ padding: 24 }}>{children}</main>
      <Footer />
    </>
  );
}

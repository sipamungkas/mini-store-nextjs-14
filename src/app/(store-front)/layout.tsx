import Navbar from "./_components/navbar";
import Footer from "./_components/footer";

export default function StoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">{children}</main>

      <Footer />
    </>
  );
}

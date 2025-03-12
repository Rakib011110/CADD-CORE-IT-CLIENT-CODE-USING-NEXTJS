import Footer from "@/components/UI/Footer/Footer";
import Navbar from "@/components/UI/Navbar/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;

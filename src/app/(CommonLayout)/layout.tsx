import Footer from "@/components/UI/Footer/Footer";
import Navbar from "@/components/UI/Navbar/Navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>

      <div className="">
<Navbar/>
        <main>{children}</main>
      </div> 

      <Footer/>
    </div>
  );
};

export default layout;
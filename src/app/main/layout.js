import NavBar from "@/components/NavBar";
import NavMobile from "@/components/NavMobile";

export default function RootLayout({ children }) {
   return (
      <>
         <NavBar />
         <NavMobile />
         {children}
      </>
   );
}

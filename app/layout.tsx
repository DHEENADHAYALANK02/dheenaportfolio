import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {title:"Dheenadhayalan K — Full-Stack Software Engineer",description:"Full-stack engineer and founder of Rategle Technologies. Production web, mobile and cloud products shipped from idea to launch.",openGraph:{title:"Dheenadhayalan K — Full-Stack Software Engineer",type:"website"}};
export default function RootLayout({children}:{children:React.ReactNode}){
 return(<html lang="en"><head><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/><link href="https://fonts.googleapis.com/css2?family=Anton&family=Archivo:wght@400;500;700&family=Dancing+Script:wght@400;500;600;700&display=swap" rel="stylesheet"/></head><body>{children}</body></html>);
}

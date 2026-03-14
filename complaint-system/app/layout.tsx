import "./globals.css";
import Header from "../components/user/Heder";
import Footer from "../components/common/Footer";

export default function RootLayout({
 children,
}:{
 children:React.ReactNode
}) {

return (

<html lang="en">

<body>

<Header/>

<main className="max-w-full mx-auto p-1 min-h-screen">
{children}
</main>

<Footer/>

</body>

</html>

)

}
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import '../globals.css'

export const metadata = {
  title: 'About',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    
        <main>
          <Navbar/>
        {children}
        <Footer/>
        </main>

  )
}

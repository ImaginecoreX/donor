import Navbar from '../../components/Navbar'
import '../globals.css'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Request Details',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <div>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>

  )
}

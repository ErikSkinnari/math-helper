import { Navbar } from '../Header/Navbar'
import { Footer } from '../Footer/Footer'

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar />


      <main>{children}</main>

      <Footer />
    </>
  )
}

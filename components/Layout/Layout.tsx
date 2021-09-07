import { Navbar } from '../Header/Navbar'
import Footer from '../Footer/Footer'

export default function Layout({ children }: {children: any}): JSX.Element {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

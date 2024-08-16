import { Header } from "./components/header"
import "../src/style/style.css"
import "../src/style/responsivo.css"
import "../src/style/global.css"
import "../src/style/header.module.css"

import { BannerSection } from "./components/bannerSection"
import { TechSection } from "./components/techSection"
import { RenderizaSobreMim } from "./components/secaoSobreMim"
import { Footer } from "./components/footer"
import { MainSection } from "./components/mainSection"

function App() {

  return (
    <>
      <Header />
      <MainSection>
        <BannerSection />
        <TechSection />
        <RenderizaSobreMim />
      </MainSection>
      <Footer />
    </>

  )
}

export default App

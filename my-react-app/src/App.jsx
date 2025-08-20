import { PageLayout } from "./components/layout/PageLayout"
import FullscreenSquaresBackground from "./components/layout/FullscreenSquaresBackground"
import Herosection from "./components/sections/Herosection"
import Skillssection from "./components/sections/Skillssection"
import Projectssection from "./components/sections/Projectssection"
import Contactsection from "./components/sections/Contactsection"


function App() {


  return (
    <>
      <main>
        <>
          <FullscreenSquaresBackground />
          <PageLayout>
            <Herosection />
            <Skillssection />
            <Projectssection />
            <Contactsection />
          </PageLayout>
        </>
      </main>
    </>
  )
}

export default App

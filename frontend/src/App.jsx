import styles from "./style"

import { Navbar, Hero, AutoSchedule, Button, Canvas, Footer, GetStarted, Google, LearnMore } from "./components"

import { hero_blobs, hero_bottom } from "./assets"

const App = () => (
  <div className='bg-secondary w-full overflow-hidden'>
    <div className="bg-local bg-no-repeat md:bg-[60vw_-20vh] md:bg-auto ss:bg-[40vw_30vh] ss:bg-[length:70%] bg-[35vw_77vh] bg-[length:75%]" style={{backgroundImage: `url(${hero_blobs})`, '@media (maxWidth: 768px)': {backgroundImage: "none"}}}>
      <div className={`${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.flexStart}`}>
        <div className = {`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <LearnMore />
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} pb-20`}>
      <div className = {`${styles.boxWidth}`}>
        <AutoSchedule />
        <Google />
        <Canvas />
      </div>
    </div>
    <div className="flex justify-center w-screen bg-footer">
      <Footer />
    </div>
  </div>
)

export default App
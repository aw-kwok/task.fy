import styles from "./style"

import { Navbar, Hero, Automatic, Button, Canvas, Footer, GetStarted, Google } from "./components"

const App = () => (
  <div className='bg-secondary w-full overflow-hidden'>
    <div className={`${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-secondary ${styles.flexStart}`}>
      <div className = {`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className = {`${styles.boxWidth}`}>
        <Automatic />
        <Google />
        <Canvas />
        <Footer />
      </div>
    </div>
  </div>
)

export default App
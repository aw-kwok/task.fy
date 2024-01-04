import styles from "../style"
import GetStarted from "./GetStarted"
import { placeholder, arrow } from "../assets"

const Hero = () => (
    <div>
        <section id = "home" className = {`flex md:flex-row flex-col sm:mt-20 mt-10 items-start`}>
            <div className={`flex-1 ${styles.flexStart} flex-col  ${styles.paddingX}`}>

                <div className='flex flex-row justify-between items-center w-full'>
                    <h1 className= {`flex-1 ${styles.headline}`}>
                        Assignments on autopilot.<br className='sm:block hidden'/> {" "}
                        Simplify your academic success.
                    </h1>
                </div>

                <p className="text-[20px] pt-7 pb-10 ss:leading-[1.5em]">
                Integrates seamlessly with Canvas and Google Calendar to make time management simple. We’re here to help you take back control over your schedule and make time for the things that matter to you.
                </p>

                <div className="ss:flex md:mr-4 mr-0 pt-10">
                    <GetStarted />
                </div>

            </div>
            <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>

                <img src={placeholder} alt="placeholder" className="w-[75%] relative p-5" />
                
            </div>
        </section>
    </div>
    
)


export default Hero

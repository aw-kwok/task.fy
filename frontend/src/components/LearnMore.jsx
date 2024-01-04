import { hero_bottom, arrow } from "../assets"

const LearnMore = () => (
    <div>
        <div className="flex flex-col items-center pt-7">
            <p className="font-outfit font-normal pt-5">Learn more about task.fy</p>
            <img className="w-[15px] py-1" src={arrow} />
        </div>
        <img className = "bg-primary w-screen" src = {hero_bottom} />
    </div>
    
)


export default LearnMore

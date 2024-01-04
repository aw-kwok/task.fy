import { hero_bottom, arrow } from "../assets"

const LearnMore = () => (
    <div>
        <div className="flex flex-col items-center pt-10">
            <div className="flex flex-col items-center animate-bounce">
                <p className="font-outfit font-normal pb-1">Learn more about task.fy</p>
                <img className="w-[15px]" src={arrow} />
            </div>
        </div>
        <img className = "bg-primary w-screen" src = {hero_bottom} />
    </div>
    
)


export default LearnMore

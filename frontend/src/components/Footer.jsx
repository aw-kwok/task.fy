import styles from "../style"
import CTABox from "./CTABox"

import { footerLinks } from "../constants"

const Footer = () => (
  <div className={`flex md:flex-row flex-col py-20 px-20`}>
    <CTABox />
    <div className="flex-[1.5] md:w-full w-screen flex flex-row flex-wrap justify-between md:mt-0 mt-10 px-20">
      {footerLinks.map((footerLink) => (
        <div key={footerLink.key} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
          <h4 className="font-outfit text-[20px] text-white">
            {footerLink.title}
          </h4>
          <ul>
            {footerLink.links.map((link, index) => (
              <li key = {link.name} className="font-outfit text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer">
                {link.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>  
)

export default Footer

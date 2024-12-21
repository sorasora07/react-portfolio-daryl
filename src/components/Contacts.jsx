import { CONTACT } from "../constants"
import {motion} from "framer-motion";

const Contacts = () => {
  return ( 
  <div className="border-b border-neutral-900 pb-20">
    <motion.h2 
    whileInView={{opacity:1, y: 0}}
    initial={{opacity: 0, y:-100}}
    transition={{duration:0.5}}
    className="my-10 text-center text-4xl">Get in touch with me
    </motion.h2>
    <div className="text-center tracking-tighter">
        <motion.p 
        whileInView={{opacity: 1, x:0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration:1}}
        className="my-4">{CONTACT.address}
        </motion.p>
        <motion.div 
        whileInView={{opacity: 1, x:0}}
        initial={{opacity: 0, x: 100}}
        transition={{duration:1}}
        className="my-4">
            <a href="tel:+639496884579" alt="Contact Number" className="border-b">{CONTACT.phoneNo}
            </a>
        </motion.div>
        <motion.div 
        whileInView={{opacity: 1, x:0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration:1}}>
            <a
            href="mailto:darylashleyasiadobalatbat@gmail.com" 
            className="border-b"
            >{CONTACT.email}
            </a>
        </motion.div>
    </div>
  </div>
  )
}

export default Contacts

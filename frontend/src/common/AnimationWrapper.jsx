
import { motion } from "framer-motion"



function AnimationWrapper({uniqueKey, initial, animate, transition, children}) {
  
    return (
        <motion.div 
            key={uniqueKey}
            initial={initial}
            animate={animate}
            transition={transition}
        >
            {children}
        </motion.div>
    )
}

export default AnimationWrapper

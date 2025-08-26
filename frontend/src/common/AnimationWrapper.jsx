
import { motion } from "framer-motion"


function AnimationWrapper({uniqueKey, children, initial={opacity:0}, animate={opacity:1}, transition={duration:0.6}}) {
  
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

export const containerVariants = (delay = 0)=>({
    "offscreen":{
        opacity:0,
        y:30
    },
    "onscreen":{
        opacity:1,
        y:0,
        transition:{
            type:"spring",
            duration:2,
            delay
        }
    }
})

export const fadeIn = (direction, delay) => {
    return {
      hidden: {
        y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
        opacity: 0,
        x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
      },
      show: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          type: 'tween',
          duration: 1.2,
          delay: delay,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
    };
  };
  
  export const tagVaraints={
    "offscreen":{
      opacity:0,
      y:10
    },
    "onscreen":{
      opacity:1,
      y:0,
      transition:{
        type:"spring",
        duration:2,
      }
    }
  }
  export const titleVaraints={
    "offscreen":{
      opacity:0,
      y:30
    },
    "onscreen":{
      opacity:1,
      y:0,
      transition:{
        type:"spring",
        duration:2.2,
      }
    }
  }
  export const desVaraints={
    "offscreen":{
      opacity:0,
      y:20 
    },
    "onscreen":{
      opacity:1,
      y:0,
      transition:{
        type:"spring",
        duration:2.6,
        delay:.2
      }
    }
  }
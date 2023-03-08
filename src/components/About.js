import { motion } from 'framer-motion';
import React from 'react';
import CountUp from 'react-countup';
import { fadeIn } from "../variants";
import { useInView } from 'react-intersection-observer';

const About = () => {
  const[ref,inView]=useInView({
    threshold:0.5,
   })
  return( 
  <section className='section' id='about' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'> 
      <motion.div
      variants={fadeIn('right',0.5)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once:false,amount:0.7}} 
      className='flex-1 bg-about h-[150px]  bg-contain bg-no-repeat mix-blend-lighten bg top'>

      </motion.div>
        <motion.div
        variants={fadeIn('left',0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.7}} 
        className='flex-1'>  
          <h2 className='h2 text-accent'>About us </h2>
          <h3 className='h3 mb-4'>A design club started by the  students of St. Thomas College of Engineering and Technology, Kannur</h3>
          <p className='mb-6'>We provide tailored end to end web design & development services, creatively rich, supremely functional, and highly
flexible for your unique needs and preferences.</p>
        <div  className='flex gap-x-6 lg:gap-x-10 mb-12'>
          <div>
            <div className='text-[40px] font-tertiary text-gradient mb-2'>
              {inView?
              <CountUp start={0} end={10} duration={3}/>:null
            }
           
             </div>
             <div className='font-primary text-sm tracking-[2px]'>
           Projects
            </div>
          </div>
          <div>
            <div className='text-[40px] font-tertiary text-gradient mb-2'>
              {inView?
              <CountUp start={0} end={10} duration={3}/>:null
            }
           
             </div>
             <div className='font-primary text-sm tracking-[2px]'>
            Happy <br/>
           client
            </div>
          </div>
          <div>
            <div className='text-[40px] font-tertiary text-gradient mb-2'>
              {inView?
              <CountUp start={0} end={5} duration={3}/>:null
            }
           
             </div>
             <div className='font-primary text-sm tracking-[2px]'>
            awards <br/>
            </div>
          </div>
          <div>
            <div className='text-[40px] font-tertiary text-gradient mb-2'>
              {inView?
              <CountUp start={0} end={5} duration={3}/>:null
            }k+

           
             </div>
             <div className='font-primary text-sm tracking-[2px]'>
            hours of support <br/>
            </div>
          </div>
        </div>
        </motion.div>
      </div>
    </div>
 
    
  </section>)
};

export default About;

import { motion } from 'framer-motion';
import React from 'react';
import { fadeIn } from '../variants';

const Contact = () => {
  return (
    <section className='py-1  lg:section ' id='contact'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          <motion.div
           variants={fadeIn('right',0.3)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once:false,amount:0.3}}
           className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='text-xl uppercase text-accent font-medium 
              mb-2 tracking-wide '>get in touch</h4>
              <h2 className='text-[45px] lg:text-[90px] 
              leading-none mb-12'>let's work <br /> together</h2>
            </div>
          </motion.div>
         <motion.form
          variants={fadeIn('left',0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false,amount:0.3}}
           className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start' action="">
         <input className='bg-transparent border-b py-3  outline-none w-full transition-all  placeholder:text-white focus:border-accent' type="text" placeholder='your name'  />
         <input className='bg-transparent border-b py-3  outline-none w-full transition-all placeholder:text-white focus:border-accent' type="text" placeholder='your email'  />
        <textarea className='bg-transparent border-b py-12 outline-none w-full transition-all 
         placeholder:text-white focus:border-accent resize-none mb-12' 
         type="text" placeholder='your message'  ></textarea>
         <button className='btn btn-lg'>send message</button>
         </motion.form>
        </div>
      </div>
    </section>
  )
};

export default Contact;
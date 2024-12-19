import React from 'react'
import img from "../assets/img-6.jpg"

const About = () => {
  return (
    <section id='about' className=' w-screen min-h-screen'>
      <div className=' max-container flex justify-center items-center gap-24 padding-hero-y padding-x h-full max-xl:gap-7 max-lg:flex-col'>
        <div className=' flex-1 w-full'>
          <div className=' bg-[orangered] flex justify-end pt-10 pl-10 max-sm:pt-5 max-sm:pl-5'>
            <img src={img} alt="aboutImg" className=' object-cover object-center max-lg:w-full'/>
          </div>
        </div>

        <div className=' flex-1'>
          <p className=' text-[#376c35] relative before:absolute before:w-20 before:h-1 before:bg-[#376c35] before:top-[50%] before:left-0 pl-24 text-2xl before:translate-y-[-50%]'>ABOUT US</p>
        
          <div className='text-center my-7 text-2xl leading-[60px] font-semibold text-black max-xl:text-2xl max-xl:my-4 max-lg:my-7 max-lg:text-2xl max-lg:leading-[60px] max-sm:text-1xl'>
            <h1>Established: 2015<br></br>Industry: Oil & Gas Services<br></br>Specialization: Cementing Services</h1> 
          </div>

          <p className='font text-lg text-slate-800'>
          QES vision is to be a leading local service company providing cementing, new technologies and other related services to oil and gas operators in Oman by consistently achieving targets beyond expectations. In addition, to develop processes,
          standards and management system to ensure consistency in service delivery and wellbeing for our employees and supply well integrity package to the customers/suppliers.
          </p>

          <p className=' font text-lg text-slate-500 mt-5 mb-14  max-xl:mb-8'>
          
          </p>

          <button className=' py-4 px-9 text-xl group relative text-white bg-[orangered] rounded-sm'>
            <div className=' buttonDiv'></div>
            <span className='buttonSpan'>Know More</span>
          </button>

        </div>
      </div>
    </section>
  )
}

export default About
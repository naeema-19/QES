import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className=' w-full'>
      <div className='max-w-[1500px] m-auto grid grid-cols-2 items-center gap-10 py-20 max-xl:pt-[100px] max-lg:pt-[0px] max-lg:pb-[60px] max-md:pt-[0px]max-md:pb-[70px] max-lg:grid-cols-1 max-lg:gap-6 padding-x'>
        <div className=' h-[80%] max-lg:max-w-[50%] max-md:max-w-[70%] max-sm:max-w-[100%] max-md:h-[100%]'>
        <div className='text-5xl font-semibold leading-[70px] mt-5 mb-10 max-xl:leading-[50px] max-xl:mb-10 max-sm:text-3xl'>
        <p className='w-fit text-[#35c42f] relative before:absolute before:w-20 before:h-1 before:bg-[#35c42f] before:top-[50%] before:left-0 pl-24 text-2xl before:translate-y-[-50%] '>Locate Us</p>
          <h1>LOCATE US</h1>
        </div>
        <div style={{ width: '100%', height: '450px' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.107762610761!2d58.434868775110324!3d23.600467878772957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91ff15aceb368f%3A0x6d743f7491599da!2sBait%20Al%20Reem!5e0!3m2!1sen!2som!4v1734946494290!5m2!1sen!2som"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
        </div>

        <div className=' px-5 max-lg:px-0'>
          <p className='w-fit text-[#35c42f] relative before:absolute before:w-20 before:h-1 before:bg-[#35c42f] before:top-[50%] before:left-0 pl-24 text-2xl before:translate-y-[-50%] '>CONTACT FORM</p>

        <div className='text-5xl font-semibold leading-[70px] mt-5 mb-20 max-xl:leading-[50px] max-xl:mb-10 max-sm:text-3xl'>
          <h1>FEEL FREE TO CONTACT</h1>
          <h1>WITH US!</h1>
        </div>

        <div className=' grid grid-cols-2 gap-14 max-xl:gap-10 max-lg:gap-14 max-md:grid-cols-1 max-sm:w-[90%] max-sm:m-auto'>
          <input type="text" placeholder='Name' className=' input'/>
          <input type="text" placeholder='Phone' className=' input'/>
          <input type="email" placeholder='Email' className=' input' />
          <input type="text" placeholder='Subject' className=' input resize-none col-span-2 max-md:col-span-1' />
          <textarea placeholder='Message' className=' h-36 input resize-none col-span-2 max-md:col-span-1'></textarea>
        </div>
          <button className=' mt-20 py-4 px-9 text-xl group relative text-white bg-[orangered] rounded-sm max-xl:mt-10'>
            <div className=' buttonDiv'></div>
            <span className='buttonSpan'>SEND MESSAGE</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Contact
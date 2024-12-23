import React, { useState, useEffect } from 'react';
import { RiDoubleQuotesL } from 'react-icons/ri';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { whowe } from '../Data/Data';
import { BsDot } from 'react-icons/bs';

const Whowe = () => {
  const [currSlide, setCurrSlide] = useState(0);

  // Automatic scrolling effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrSlide((prevSlide) => (prevSlide === whowe.length - 1 ? 0 : prevSlide + 1));
    }, 5000); // Change slides every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const prevSlide = () => {
    setCurrSlide(currSlide === 0 ? whowe.length - 1 : currSlide - 1);
  };

  const nextSlide = () => {
    setCurrSlide(currSlide === whowe.length - 1 ? 0 : currSlide + 1);
  };

  const dotClick = (i) => {
    setCurrSlide(i);
  };

  return (
    <section className='w-full min-h-screen'>
      <div className='flex justify-between items-center gap-20 max-container padding-hero-y relative max-lg:flex-col padding-x'>
        <div className='relative flex-1 flex justify-center items-center max-lg:w-full'>
          <img
            src={whowe[currSlide].img}
            alt="whoweImg"
            className='object-cover object-center h-[350px] w-[50%] max-lg:w-full transition-transform ease-in-out duration-200 max-sm:h-[400px]'
          />
          <RiDoubleQuotesL className='absolute top-[50%] translate-y-[-50%] -right-[75px] text-[#35c42f] text-[180px] max-lg:hidden' />
        </div>

        <div className='flex-1'>
          <p className='text-[#35c42f] relative before:absolute before:w-20 before:h-1 before:bg-[#35c42f] before:top-[50%] before:left-0 pl-24 text-2xl before:translate-y-[-50%]'>
            Who are We
          </p>
          <div className='my-7 text-5xl leading-[60px] font-semibold text-black max-sm:text-3xl'>
            <h1>{whowe[currSlide].head}</h1>
          </div>

          <div className='flex relative'>
            <p className='font text-lg text-black-500 mb-8 w-[85%] max-sm:w-full'>
              {whowe[currSlide].desc}
            </p>
          </div>


          <div className='flex text-4xl mt-20 justify-start max-lg:mt-5'>
            {whowe.map((val, index) => (
              <div
                key={index}
                onClick={() => dotClick(index)}
                className={`cursor-pointer ${currSlide === index ? 'text-[#35c42f]' : 'text-4xl'}`}
              >
                <BsDot />
              </div>
            ))}
          </div>
        </div>

        <div
          className='absolute left-4 max-lg:top-[25%] h-10 w-10 flex justify-center items-center max-lg:left-1 max-lg:-translate-y-[-50%] text-4xl max-lg:text-2xl text-[#35c42f] cursor-pointer rounded-full hover:bg-black hover:text-white duration-300 max-sm:top-[460px] max-sm:left-32 max-sm:rounded-full'
          onClick={prevSlide}
        >
          <IoIosArrowBack />
        </div>

        <div
          className='absolute right-4 max-lg:top-[25%] h-10 w-10 flex justify-center items-center max-lg:right-1 max-lg:-translate-y-[-50%] text-4xl max-lg:text-2xl text-[#35c42f] cursor-pointer rounded-full hover:bg-black hover:text-white duration-300 max-sm:top-[460px] max-sm:right-32'
          onClick={nextSlide}
        >
          <IoIosArrowForward />
        </div>
      </div>
    </section>
  );
};

export default Whowe;

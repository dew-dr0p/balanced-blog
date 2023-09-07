import Image from "next/image";
import BannerImage from '../../../public/Kingdom_Service.jpg'

export default function Banner() {
  return (
    <section className='relative grid max-w-3xl shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.10)] rounded-xl'>
        <Image
          src={BannerImage}
          alt='Image Text'
          width={896}
          className='rounded-xl'
        ></Image>
        <div className='absolute grid gap-2 bottom-0 w-auto text-white rounded-b-xl text-xs p-3 bg-black bg-opacity-40 bg-blend-screen backdrop-blur'>
          <span className='bg-primary uppercase px-2 w-fit rounded'>The Balanced Meal</span>
          <h2 className='font-bold text-2xl'>October 2020 Day 10 - The Balanced Meal - Daily Diet</h2>
          <span className='text-[0.625rem] uppercase'>October 09, 2020</span>
          <p >KINGDOM SERVICE A WAY TO A LIFE OF HONOURProv 27:1818 Whoso keepeth the fig tree shall eat the fruit thereof: so he that waiteth on his master shall b…</p>
        </div>
      </section>
  )
}

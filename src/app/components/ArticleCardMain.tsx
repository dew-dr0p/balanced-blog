import Image from 'next/image'
import BannerImage from '../../../public/Kingdom_Service.jpg'

export default function ArticleCardMain() {
  return (
    <div className='grid gap-8'>
      <div className='shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.10)] rounded-xl grid grid-flow-col gap-5'>
          <Image
              src={BannerImage}
              alt='Image'
              // width={250}
              className='rounded-xl'
          ></Image>
          <div>
            <div className='grid gap-2 bottom-0 w-autotext-xs p-3'>
              {/* <span className='bg-primary uppercase px-2 w-fit rounded'>The Balanced Meal</span> */}
              <h2 className='font-bold text-xl text-black'>October 2020 Day 10 - The Balanced Meal - Daily Diet</h2>
              <span className='text-xs uppercase text-primary'>October 09, 2020</span>
              <p >KINGDOM SERVICE A WAY TO A LIFE OF HONOUR Prov 27:18 18 Whoso keepeth the fig …</p>
              <span className='text-xs uppercase text-primary'>October 09, 2020</span>
            </div>
          </div>
      </div>
      <div className='shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.10)] rounded-xl grid grid-flow-col gap-5'>
          <Image
              src={BannerImage}
              alt='Image'
              // width={250}
              className='rounded-xl'
          ></Image>
          <div>
            <div className='grid gap-2 bottom-0 w-autotext-xs p-3'>
              {/* <span className='bg-primary uppercase px-2 w-fit rounded'>The Balanced Meal</span> */}
              <h2 className='font-bold text-xl text-black'>October 2020 Day 10 - The Balanced Meal - Daily Diet</h2>
              <span className='text-xs uppercase text-primary'>October 09, 2020</span>
              <p >KINGDOM SERVICE A WAY TO A LIFE OF HONOUR Prov 27:18 18 Whoso keepeth the fig …</p>
              <span className='text-xs uppercase text-primary'>October 09, 2020</span>
            </div>
          </div>
      </div>
      <div className='shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.10)] rounded-xl grid grid-flow-col gap-5'>
          <Image
              src={BannerImage}
              alt='Image'
              // width={250}
              className='rounded-xl'
          ></Image>
          <div>
            <div className='grid gap-2 bottom-0 w-autotext-xs p-3'>
              {/* <span className='bg-primary uppercase px-2 w-fit rounded'>The Balanced Meal</span> */}
              <h2 className='font-bold text-xl text-black'>October 2020 Day 10 - The Balanced Meal - Daily Diet</h2>
              <span className='text-xs uppercase text-primary'>October 09, 2020</span>
              <p >KINGDOM SERVICE A WAY TO A LIFE OF HONOUR Prov 27:18 18 Whoso keepeth the fig …</p>
              <span className='text-xs uppercase text-primary'>October 09, 2020</span>
            </div>
          </div>
      </div>
    </div>
  )
}

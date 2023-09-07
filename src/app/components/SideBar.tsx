import Image from 'next/image'
import SectionHeader from '@/app/components/SectionHeader'
import envelope from '../../../public/envelope.svg'
import ArticleCardSide from './ArticleCardSide'
import Categories from './Categories'

export default function SideBar() {
  return (
    <div className='grid max-w-sm gap-9 auto-rows-max'>
        <div className='border border-border shadow-[0px_10px_10px_0px_rgba(0,_0,_0,_0.10)] rounded-xl overflow-hidden relative w-fit h-fit grid gap-3 p-5 place-items-center text-center justify-center'>
            <Image
            src={envelope}
            alt='Envelope'
            width={50}
            className='absolute rotate-[21deg] -top-3 -right-3 opacity-50'
            ></Image>
            <h3 className='uppercase text-lg text-black font-bold'>Subscribe to our Newsletter</h3>
            <p className='text-gray'>Get all our latest contents delivered straight to your inbox.</p>
            <input type="text" placeholder='Email Address' className='p-[0.625rem] py-1 w-full border border-border' />
            <button className='bg-primary uppercase text-white py-3 px-2 w-full'>Subscribe</button>
        </div>
        <div className='grid'>
            <SectionHeader title={'Search this Blog'} />
            <input type="text" placeholder='Email Address' className='p-[0.625rem] py-1 w-full border border-border' />
        </div>
        <div className='grid'>
            <SectionHeader title={'Popular Posts'} />
            <ArticleCardSide />
        </div>
        <div className='grid'>
            <SectionHeader title={'Categories'} />
            <Categories />
        </div>
    </div>
  )
}

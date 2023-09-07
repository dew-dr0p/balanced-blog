import Image from "next/image";
import BannerImage from '../../../public/Kingdom_Service.jpg'


export default function ArticleCardSide() {
  return (
    <div className="grid gap-5">
        <div className="grid grid-flow-col gap-3 h-fit rounded-xl p-3 shadow-[0px_10px_10px_0px_rgba(0,_0,_0,_0.10)]">
            <Image
                src={BannerImage}
                alt="Image"
            ></Image>
            <div>
                <div className='grid gap-2 bottom-0 w-autotext-xs p-3'>
                    {/* <span className='bg-primary uppercase px-2 w-fit rounded'>The Balanced Meal</span> */}
                    <h2 className='text-sm text-black'>October 2020 Day 10 - The Balanced Meal - Daily Diet</h2>
                    <span className='text-xs uppercase text-primary'>October 09, 2020</span>
                </div>
            </div>
        </div>
        <div className="grid grid-flow-col gap-3 h-fit rounded-xl p-3 shadow-[0px_10px_10px_0px_rgba(0,_0,_0,_0.10)]">
            <Image
                src={BannerImage}
                alt="Image"
            ></Image>
            <div>
                <div className='grid gap-2 bottom-0 w-autotext-xs p-3'>
                    {/* <span className='bg-primary uppercase px-2 w-fit rounded'>The Balanced Meal</span> */}
                    <h2 className='text-sm text-black'>October 2020 Day 10 - The Balanced Meal - Daily Diet</h2>
                    <span className='text-xs uppercase text-primary'>October 09, 2020</span>
                </div>
            </div>
        </div>
        <div className="grid grid-flow-col gap-3 h-fit rounded-xl p-3 shadow-[0px_10px_10px_0px_rgba(0,_0,_0,_0.10)]">
            <Image
                src={BannerImage}
                alt="Image"
            ></Image>
            <div>
                <div className='grid gap-2 bottom-0 w-autotext-xs p-3'>
                    {/* <span className='bg-primary uppercase px-2 w-fit rounded'>The Balanced Meal</span> */}
                    <h2 className='text-sm text-black'>October 2020 Day 10 - The Balanced Meal - Daily Diet</h2>
                    <span className='text-xs uppercase text-primary'>October 09, 2020</span>
                </div>
            </div>
        </div>
    </div>
  )
}

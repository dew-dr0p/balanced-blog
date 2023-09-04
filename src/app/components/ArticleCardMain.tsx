import Image from 'next/image'
import BannerImage from '../../../public/Kingdom_Service.jpg'

export default function ArticleCardMain() {
  return (
    <div>
        <div className='shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.10)]'>
            <Image
                src={BannerImage}
                alt='Image'
                width={250}
            ></Image>
        </div>
    </div>
  )
}

import Image from 'next/image'
import Logo from '../../../public/BSI.png'
import Link from 'next/link'

export default function NavBar() {
  return (
    <div className='grid items-center justify-center'>
        <div className='container'>
            <Image
                src={Logo}
                alt='BSI Logo - Balanced Series International'
                // width={390}
                // height=""
                className='my-6 w-52 justify-self-center'
            ></Image>
        </div>
        <div className='flex bg-secondary text-white text-sm uppercase w-screen items-center justify-center border-b-4 border-primary'>
            <div className="container flex justify-between w-full">
                <Link href='/' className='p-4 border-x border-white'>Home</Link>
                <Link href='/' className='p-4 border-x border-white'>The Balanced Teen</Link>
                <Link href='/' className='p-4 border-x border-white'>The Balanced Health</Link>
                <Link href='/' className='p-4 border-x border-white'>Testimony</Link>
            </div>
        </div>
    </div>
  )
}

import Image from 'next/image'
import SideBar from '@/app/components/SideBar'
import MainPage from '@/app/components/MainPage'


export default function Home() {
  return (
    <main>
      <div className="container">
        <div className='grid grid-flow-col w-full justify-between gap-6 mt-10'>
          <MainPage />
          <SideBar />
        </div>
      </div>
    </main>
  )
}

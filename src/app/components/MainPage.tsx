import Banner from '@/app/components/Banner'
import SectionHeader from '@/app/components/SectionHeader'
import ArticleCardMain from '@/app/components/ArticleCardMain'

export default function MainPage() {
  return (
    <div>
        <Banner />
        <section className='grid mt-6'>
            <div className='flex justify-between items-center'>
                <h3 className='text-black text-xl py-3 font-bold'>Recent Posts</h3>
                <p className='text-gray underline text-sm'>Load More</p>
            </div>
            <div>
                <ArticleCardMain />
            </div>
        </section>
    </div>
  )
}

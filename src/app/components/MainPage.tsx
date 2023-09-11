import Banner from '@/app/components/Banner'
import SectionHeader from '@/app/components/SectionHeader'
import ArticleCardMain from '@/app/components/ArticleCardMain'
import Posts from './Posts'
import { sanityFetch, token } from '../../../sanity/lib/sanityFetch'
import { SanityDocument } from 'next-sanity'
import { postsQuery } from '../../../sanity/lib/queries'
import { draftMode } from 'next/headers'
import PreviewPosts from './PreviewPosts'
import PreviewProvider from './PreviewProvider'

export default async function MainPage() {
  const posts = await sanityFetch<SanityDocument[]>({ query: postsQuery})
  const isDraftMode = draftMode().isEnabled
  console.log(token, isDraftMode)

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
            <div>
              {
                (isDraftMode && token) && 
                <PreviewProvider token={token}>
                  <PreviewPosts posts={posts} />
                </PreviewProvider>
              }
              <Posts posts={posts} />
            </div>
        </section>
    </div>
  )
}

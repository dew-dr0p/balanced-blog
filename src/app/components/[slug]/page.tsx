import { SanityDocument } from "@sanity/client";
import Post from "@/app/components/Post";
import { postPathsQuery, postQuery } from "../../../../sanity/lib/queries";
import { sanityFetch } from "../../../../sanity/lib/sanityFetch";
import { client } from "../../../../sanity/lib/client";

// Prepare Next.js to know which routes already exist
export async function generateStaticParams() {
  // Important, use the plain Sanity Client here
  const posts = await client.fetch(postPathsQuery);

  // return posts.map((post) => ({
  //   slug: post.slug,
  // }))
  console.log(posts)
  return posts;
}

export default async function Page({ params }: { params: any }) {
  const post = await sanityFetch<SanityDocument>({ query: postQuery, params });
  console.log(params.slug) 

  return <Post post={post} />;
}
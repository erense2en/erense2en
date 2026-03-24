import { MainLayout } from 'layouts/MainLayout'
import { v4 as uuidv4 } from 'uuid'
import { getSortedPosts } from 'lib/posts'
import { BlogCard } from 'components/BlogCard'
import { InferGetStaticPropsType } from 'next'

const Blog = ({ allPostsData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <MainLayout
      title="Blog"
      description="ben Eren bu sıralar biraz koşturuyorum 🤑"
    >
      <div className="mt-2 text-2xl">Είμαι ο Eren αυτές τις μέρες τρέχω λίγο 🤑</div>
      <div className="mt-2 text-2xl">Ja sam Eren ovih dana malo jurim 🤑</div>
      <div className="mt-2 text-2xl">Ik ben Eren ik ben de laatste tijd een beetje druk bezig 🤑</div>
      <div className="mt-2 text-2xl">მე ერენი ვარ, ამ დღეებში ცოტა დაკავებული ვარ 🤑</div>
      <div className="mt-8 grid gap-8">
        {allPostsData.map(({ slug, date, title, excerpt }) => {
          return <BlogCard key={uuidv4()} slug={slug} date={date} title={title} excerpt={excerpt} />
        })}
      </div>
    </MainLayout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPosts()
  return {
    props: {
      allPostsData,
    },
  }
}

export default Blog

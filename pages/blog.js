import Link from 'next/Link';
import fs from 'fs';
import Layout from './components/Layout';
import {getAllPosts} from './api/getPosts'
import HeroPost from './components/smallComponents/HeroPost'
import MorePosts from './components/smallComponents/MorePosts'

const Blog = ({slugs, allPosts}) => {

  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <div>
    <HeroPost
      title={heroPost.title}
      coverImage={heroPost.coverImage}
      date={heroPost.date}
      author={heroPost.author}
      slug={heroPost.slug}
      excerpt={heroPost.excerpt}
    />

    <MorePosts posts={morePosts}/>

    </div> 
  )
}

export default Layout(Blog) // This adds the global layout (header & footer ect)

export async function getStaticProps() {
  const files = fs.readdirSync('posts')

  const allPosts = getAllPosts([ 
    'title',
    'date',
    'excerpt',
    'coverImage',
    'slug'
  ])

  return {
    props: { 
      slugs: files.map(filename => filename.replace('.md','')),
      allPosts
    }
  }
}

// import Link from 'next/Link';
import fs from 'fs';
import Layout from './components/Layout';
import {getAllPosts} from './api/getPosts'
import HeroPost from './components/smallComponents/HeroPost'
import PostsList from './components/smallComponents/PostsList'

const Blog = ({slugs, allPosts}) => {

  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <div>
    {/* <HeroPost
      title={heroPost.title}
      coverImage={heroPost.coverImage}
      date={heroPost.date}
      author={heroPost.author}
      slug={heroPost.slug}
      excerpt={heroPost.excerpt}
    /> */}
    <div id="blog-banner"></div>
    <div className="container">
      <h2 className="page-title">Blog</h2>
    </div>
    <PostsList posts={allPosts}/>

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
    'slug',
    'tags'
  ])

  return {
    props: { 
      slugs: files.map(filename => filename.replace('.md','')),
      allPosts
    }
  }
}

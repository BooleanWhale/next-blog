import Link from 'next/Link'
import fs from 'fs'
import Layout from './components/Layout';
import BlogPosts from './components/BlogPosts';
// import './main.css';

const Blog = ({slugs}) => {
  return (
    <div><p className="test">test</p>
      <ul>
        {slugs.map( slug => {
          return(
          <li key={slug}>
            <Link as={'/blog/'+slug} href={'/blog/'+slug}>
              <a>{slug}</a>
            </Link>
          </li>
          )
        })}
      </ul>
      {/* <BlogPosts/> */}
    </div> 
  )
}

export default Layout(Blog) // This adds the global layout (header & footer ect)

export const getStaticProps = async () => {
  const files = fs.readdirSync('posts')

  return {
    props: { 
      slugs: files.map(filename => filename.replace('.md',''))
    }
  }
}
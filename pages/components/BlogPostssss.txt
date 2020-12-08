import Link from 'next/Link'
import fs from 'fs'
// import './main.css';
// THIS PAGE IS NOT IN USE

const BlogPosts = ({slugs}) => {
  return (
    <div>
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
    </div> 
  )
}
  
export default BlogPosts // This adds the global layout (header & footer ect)

export const getStaticProps = async () => {
  const files = fs.readdirSync('posts')

  return {
    props: { 
      slugs: files.map(filename => filename.replace('.md',''))
    }
  }
}
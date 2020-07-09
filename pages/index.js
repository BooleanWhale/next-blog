import Head from 'next/head'
import Link from 'next/Link'
import fs from 'fs'
// import './main.css';

export default function Home({slugs}) {
  return (
    <div><p className="test">test</p>
      <ul>
        {slugs.map( slug => {
          return(
          <li key={slug}>
            <Link key={slug} href={'/blog/'+slug}><a>{slug}</a></Link>
          </li>
          )
        })}
      </ul>
    </div> 
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync('posts')

  return {
    props: { 
      slugs: files.map(filename => filename.replace('.md',''))
    }
  }
}
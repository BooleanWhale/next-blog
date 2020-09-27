import React from 'react';
import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import matter from 'gray-matter'; //parses metadata from markdown
import marked from 'marked'; //turns markdown into html
import Layout from '../components/Layout'

const Post = ({htmlString, data}) => {

    return(
        <>
            <Head>
                <title>{data.title}</title>
                <meta title="description" content={data.description}/>
            </Head>
            <div className="blog">
                <div dangerouslySetInnerHTML={{ __html: htmlString }} />
            </div>
            <div>
                {data.description}
            </div>
        </>
)}; 

export const getStaticPaths = async () => {

    const posts = fs.readdirSync('posts')

    const paths = posts.map(post => ({
        params: {
            slug: post.replace(".md", "")
        }
    }))

    return {
        paths,
        fallback: false
    }
}
// this is a new SSG function, it create the path

export const getStaticProps = async ({params: {slug}}) => {

    const markdownWithMeta = fs.readFileSync(path.join('posts', slug+'.md')).toString();

    const parsedMarkdown = matter(markdownWithMeta) // meta is also known as 'frontmatter'

    const htmlString = marked(parsedMarkdown.content)

    return {
        props: {
            htmlString,
            data: parsedMarkdown.data
        }
    }
}
// this function fetches the data to create the path


export default Layout(Post);

// this generates dynamic routes 

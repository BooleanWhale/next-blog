import React from 'react';
import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import matter from 'gray-matter'; //parses metadata from markdown
import marked from 'marked'; //turns markdown into html

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
        </>
)}; 

export const getStaticPaths = async () => {

    const files = fs.readdirSync('posts')
    console.log('files: ', files)

    const paths = files.map(filename => ({
        params: {
            slug: filename.replace(".md", "")
        }
    }))
    console.log('paths: ', paths)

    return {
        paths,
        fallback: false
    }
}
// this is a new SSG function, it create the path

export const getStaticProps = async ({params: {slug}}) => {

    const markdownWithMeta = fs.readFileSync(path.join('posts', slug+'.md')).toString();

    const parsedMarkdown = matter(markdownWithMeta)

    const htmlString = marked(parsedMarkdown.content)

    return {
        props: {
            htmlString,
            data: parsedMarkdown.data
        }
    }
}
// this function fetches the data to create the path

export default Post;

// this generates dynamic routes 
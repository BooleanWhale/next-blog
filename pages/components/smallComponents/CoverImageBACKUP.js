import cn from 'classnames'
import Link from 'next/link'

export default function CoverImage({ title, src, slug }) {
  const image = (
    <img
      src={src}
      alt={`Cover Image for ${title}`}
      className={`cover-image`}
    />
  )
  return (
    <div className="blog-image-container">
      {slug ? (
        <Link as={`/blog/${slug}`} href="/blog/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}


// className={cn('shadow-small', {
//     'hover:shadow-medium transition-shadow duration-200': slug,
//   })}
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
  <>
      {slug ? (
        <Link as={`blog/${slug}`} href="blog/[slug]">
          <div className="blog-image-container" style={{backgroundImage: `url(${src})`}} aria-label={title}></div>
        </Link>
      ) : (
        <div className="blog-image-container" style={{backgroundImage: `url(${src})`}} aria-label={title}></div>
      )}
    </>
  )
}


// className={cn('shadow-small', {
//     'hover:shadow-medium transition-shadow duration-200': slug,
//   })}
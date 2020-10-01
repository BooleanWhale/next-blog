import DateFormater from './DateFormatter'
import CoverImage from './CoverImage'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}) {
  return (
    <div className="blog-post-preview flex-item">
      <div className="accent"></div>
      <CoverImage slug={slug} title={title} src={coverImage} />
      <div className="blog-info">
        <div className="accented-title">
          <h3 className="blog-title">
            <Link as={`/blog/${slug}`} href="/blog/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="accent"></div>
        </div>
        <p className="blog-text">{excerpt}</p>
        <div className="blog-info-bottom">
          <div className="blog-date">
            <DateFormater dateString={date} />
          </div>
          <div className="blog-section">
            <span>JAVASCRIPT</span>
          </div>
        </div>
      </div>
    </div>
  )
}

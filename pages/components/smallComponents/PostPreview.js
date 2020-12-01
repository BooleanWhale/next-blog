import DateFormater from './DateFormatter'
import CoverImage from './CoverImage'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
  tags
}) {
  return (
    <div className="blog-post-preview flex-item">
      {/* <div className={tags+"-accent accent"}></div> */}
      <CoverImage slug={slug} title={title} src={coverImage} />
      <div className="blog-info">
        <div className="accented-title">
          <h3 className="blog-title">
            <Link as={`/blog/${slug}`} href="/blog/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className={tags+"-accent accent"}></div>
        </div>
        <p className="blog-text">{excerpt}</p>
        <div className="blog-info-bottom">
          <div className="blog-date">
            <DateFormater dateString={date} />
          </div>
          <div className="blog-tags">
            <span className={tags+"-tag"}>{tags.toUpperCase()}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

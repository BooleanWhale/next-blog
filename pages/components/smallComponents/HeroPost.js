// import DateFormater from '../components/date-formater'
import CoverImage from './CoverImage'
import Link from 'next/link'
import DateFormater from './DateFormatter'

export default function HeroPost({ // these are the props
  title,
  coverImage,
  date,
  excerpt,
  slug,
}) { // these were the props
  return (
    <section className="hero-post">

      <div>
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>

      <div>
        <div>
          <h3>
            <Link as={`/blog/${slug}`} href="/blog/[slug]">
              <a>{title}</a>
            </Link>
          </h3>

          <div>
            <DateFormater dateString={date} />
          </div>
        </div>

        <div>
          <p>{excerpt} - this is the post description</p>
        </div>
      </div>
      
    </section>
  )
}
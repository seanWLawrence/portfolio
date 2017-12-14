import React from 'react'
import Helmet from 'react-helmet'

const defaultSchema = {
  "@context": "https://schema.org/",
  "@type": "Organization",
  "url": "https://seanlawrence.co",
  "logo": "https://seanlawrence.co/logo.svg"
}

const PageWrapperSlim = props => {
  const { id, style, titleStyle, date, children, title, description, image, imageDescription, url, ogType, schema } = props;
  return (
    <section
      id={id}
      className='page_wrapper_slim'
      style={style}
    >
      <Helmet>
        <title> Sean Lawrence - {title}</title>
        <meta charset="UTF-8" />
        <meta name="author" content="Sean Lawrence" />
        <meta name="keywords" content="HTML, CSS, React.js, JavaScript, Web Developer, Website Builder" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <base href="https://seanlawrence.co/" target="_self" />
        <meta property="og:type" content={ogType} />
        <meta property="og:title" content={title || 'Sean Lawrence - Modern web developer'} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image || '/img/logo.png'} />
        <meta property="og:image:alt" content={imageDescription} />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@seanbeastgrip" />
        <meta name="twitter:creator" content="@seanbeastgrip" />
        <script type="application/ld+json">
          {JSON.stringify(schema || defaultSchema)}
        </script>
      </Helmet>
      <h1
        className='page_title'
        style={titleStyle}
      >
        {title}
      </h1>
      {date ? <span>{date}</span> : null}
      {children}
    </section>
  )
}

export default PageWrapperSlim

import React from "react";
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export default function Seo({ pageTitle, pageDescription, pagePath, pageImage, pageImageWidth, pageImageHeight, newsImage }) {
  const { site: { siteMetadata }, } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
          lang
          title
          siteUrl
          locale
          facebookId
        }
      }
    }
  `)

  const title = pageTitle ? `${pageTitle} | ${siteMetadata.title}` : siteMetadata.title
  const description = pageDescription || siteMetadata.description

  const url = pagePath ? `${siteMetadata.siteUrl}${pagePath}` : siteMetadata.siteUrl

  const imageUrl = pageImage ? `${siteMetadata.siteUrl}/${pageImage}` : newsImage || `${siteMetadata.siteUrl}/thumbnail-main.png`
  const imageWidth = pageImageWidth || 1200
  const imageHeight = pageImageHeight || 630

  return (
    <Helmet>
      <html lang={siteMetadata.lang} />
      <title>{title}</title>
      <meta name="description" content={description} />

      <link rel="canonical" href={url} />

      <meta property="og:site_name" content={siteMetadata.title} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      <meta property="og:locale" content={siteMetadata.locale} />
      <meta property="fb:app_id" content={siteMetadata.facebookId} />

      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content={imageWidth} />
      <meta property="og:image:height" content={imageHeight} />

      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  )
}
import React from "react"
import { graphql } from "gatsby"
import WorkDetail from "../templates/workDetail"
import animationAssort from "../animations/b-side-cafe/animationAssort"

export default function BSideCafeWebSite({ data, location }) {
  return (
    <WorkDetail
      pageTitle="B side cafe Web Site"
      pageDescription="B side cafe Web Siteについての詳細ページ"
      pagePath={location.pathname}
      pageImage=""
      workHeadline="B side cafe Web Site"
      workDescription="B side cafeのウェブサイトを作成しました。"
      workReference={{label: "URL :", url: "https://b-side-cafe.netlify.app/"}}
      workTools={[
        {label: "Development Tools", names: "Adobe XD / Gatsby.js / Contentful / Netlify"},
        {label: "Material Creation Tools", names: "Adobe Photoshop / Adobe Illustrator / Adobe After Effects"},
      ]}
      workMaterialImages={data.allContentfulShimaumaWorkImageMaterial.edges}
      workMaterialAnimations={animationAssort}
    />
  )
}

export const query = graphql`
  query {
    allContentfulShimaumaWorkImageMaterial(
      filter: {workIndex: {eq: 2}}
    ) {
      edges {
        node {
          name
          appendix
          tool
          image {
            gatsbyImageData(placeholder: NONE)
          }
          id
        }
      }
    }
  }
`
import React from "react"
import { graphql } from "gatsby"
import WorkDetail from "../templates/workDetail"
import animationAssort from "../animations/qbel/animationAssort"

export default function QbelWebSite({ data, location }) {
  return (
    <WorkDetail
      pageTitle="Qbel Web Site"
      pagePath={location.pathname}
      workHeadline="Qbel Web Site"
      workDescription="子供達の思考力とチームワーク力を育てる活動Qbelのウェブサイトを作成しました。"
      workReference={{label: "URL :", url: "https://qbel.netlify.app/"}}
      workTools={[
        {label: "Development Tools", names: "Adobe XD / Gatsby.js / Tailwind CSS / Contentful / Netlify"},
        {label: "Material Creation Tools", names: "Adobe Photoshop / Adobe Illustrator / Adobe After Effects"},
      ]}
      workMaterialImages={data.allContentfulShimaumanWorkImageMaterial.edges}
      workMaterialAnimations={animationAssort}
    />
  )
}

export const query = graphql`
  query {
    allContentfulShimaumanWorkImageMaterial(
      filter: {workIndex: {eq: 1}}
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

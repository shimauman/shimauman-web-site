import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import WorkMaterial from "../components/work/material"
import WorkOverview from "../components/work/overview"

export default function WorkDetail(props) {
  return (
    <Layout>
      <Seo
        pageTitle={props.pageTitle}
        pageDescription={props.workDescription}
        pagePath={props.pageUrl}
      />

      <section className="mb-24 pt-12">
        <div className="w-10/12 max-w-2xl mx-auto">
          <Link to={`/`} className="inline-block mb-12">
            ← Back
          </Link>

          <WorkOverview
            headline={props.workHeadline}
            description={props.workDescription}
            reference={props.workReference}
            tools={props.workTools}
          />

          {props.workDisplay}

          <div className="flex justify-between flex-wrap">
            <WorkMaterial
              materialImages={props.workMaterialImages}
            />
            <WorkMaterial
              materialAnimations={props.workMaterialAnimations}
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}

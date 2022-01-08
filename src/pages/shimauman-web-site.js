import React from "react"
import WorkDetail from "../templates/workDetail"

export default function ShimaumanWebSite({ location }) {
  return (
    <WorkDetail
      pageTitle="Shimauman Web Site"
      pagePath={location.pathname}
      workHeadline="Shimauman Web Site"
      workDescription="Shimaumanの経歴や作品をまとめたウェブサイトを作成しました。"
      workReference={{label: "URL :", url: "https://shimauman.netlify.app/"}}
      workTools={[
        {label: "Development Tools", names: "Adobe XD / Gatsby.js / Tailwind CSS / Contentful / Netlify"},
      ]}
    />
  )
}

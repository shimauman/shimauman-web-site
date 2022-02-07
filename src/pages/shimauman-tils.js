import React from "react"
import WorkDetail from "../templates/workDetail"

export default function ShimaumanTilsWebSite({ location }) {
  return (
    <WorkDetail
      pageTitle="Shimauman Tils"
      pagePath={location.pathname}
      workHeadline="Shimauman Tils"
      workDescription="WEBエンジニアとしての仕事を通して学んだことをまとめています。"
      workReference={{label: "URL :", url: "https://shimauman.github.io/til/"}}
      workTools={[
        {label: "Development Tools", names: "GihHub / GitHub Pages"},
      ]}
    />
  )
}

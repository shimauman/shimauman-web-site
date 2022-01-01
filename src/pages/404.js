import React from "react"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/global.css"

export default function NoFoundPage({ location }) {
  return (
    <div>
      <Seo
        pageTitle = "ページが見つかりません"
        pageDescription="404のページです。"
        pagePath = {location.pathname}
      />

      <div className="pt-32 h-screen w-full bg-white overflow-y-auto">
          {/* <figure className="mb-8 w-64 mx-auto">
            <StaticImage
              src="../images/not-found.png"
              alt=""
              className=""
              layout="fullWidth"
            />
          </figure> */}

          <p className="mb-32 text-gray-500 text-center text-sm">
            お探しのページが見つかりません。
          </p>
      </div>
    </div>
  )
}

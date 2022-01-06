import React from "react"
import Seo from "../components/seo"
import { Link } from "gatsby"
import "../styles/global.css"

export default function NoFoundPage({ location }) {
  return (
    <div>
      <Seo
        pageTitle = "Not found"
        pageDescription="お探しのページは見つかりません。"
        pagePath = {location.pathname}
      />

      <div className="h-screen w-full bg-white flex flex-col justify-center items-center">
        <p className="mb-8 text tracking-wide">
          Page is not found.
        </p>
        <Link to={`/`} className="text-xs">Shimauma Top Page &gt;</Link>
      </div>
    </div>
  )
}

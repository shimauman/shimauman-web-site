import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import Lottie from "react-lottie"

export default function WorkMaterialCard(props) {

  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: props.animationData ? props.animationData : null,
  }

  return (
    <div className="mb-8 work-material-card">
      {props.isImage && (
        <figure className="mb-4 border border-gray-300 p-4">
          <GatsbyImage image={props.image} alt={props.imageAlt} />
        </figure>
      )}

      {props.isAnimation && (
        <div className="mb-4 border border-gray-300 p-4">
          <Lottie options={animationOptions} />
        </div>
      )}

      <p className="mb-2">{props.name}</p>
      <aside className="mb-2 text-xs text-gray-400">{props.appendix}</aside>
      <p className="text-xs text-gray-400">Tools : {props.tool}</p>
    </div>
  )
}

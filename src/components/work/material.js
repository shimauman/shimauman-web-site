import { getImage } from "gatsby-plugin-image"
import React from "react"
import WorkMaterialCard from "./materialCard"

export default function WorkMaterial(props) {
  return (
    <div className="flex justify-between flex-wrap">
      {props.materialImages && props.materialImages.map((material) => (
        <WorkMaterialCard
          isImage={true}
          key={material.node.id}
          name={material.node.name}
          tool={material.node.tool}
          appendix={material.node.appendix}
          image={getImage(material.node.image)}
          imageAlt={`Image of ${material.node.name}`}
        />
      ))}
      {props.materialAnimations && props.materialAnimations.map((material, index) => (
        <WorkMaterialCard
          isAnimation={true}
          key={index}
          name={material.name}
          tool={material.tool}
          appendix={material.appendix}
          animationData={material.animationData}
        />
      ))}
    </div>
  )
}

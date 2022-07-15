import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby";

export default function WorkCard(props) {
  function getImage(workIndex, workTitle) {
    if (workIndex === 1) {
      return (<StaticImage src="../../images/qbel-web-site.png" alt={`Image of ${workTitle}`} />)
    }
    if (workIndex === 2) {
      return (<StaticImage src="../../images/bsidecafe-web-site.png" alt={`Image of ${workTitle}`} />)
    }
    if (workIndex === 3) {
      return (<StaticImage src="../../images/shimauman-web-site.png" alt={`Image of ${workTitle}`} />)
    }
    if (workIndex === 4) {
      return (<StaticImage src="../../images/shimauman-tils.png" alt={`Image of ${workTitle}`} />)
    }
    if (workIndex === 5) {
      return (<StaticImage src="../../images/spascurry-live-thumbnail.jpg" alt={`Image of ${workTitle}`} />)
    }
  }

  return (
    <div className="mb-20">
      <p className="mb-4 text-sm tracking-wide">{props.title}</p>
      <Link to={props.url}>
        <figure className="hover-transform">
          {getImage(props.workIndex, props.title)}
        </figure>
      </Link>
    </div>
  )
}
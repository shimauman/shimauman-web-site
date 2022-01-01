import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby";

export default function WorkCard(props) {
  function getImage(workIndex, workTitle) {
    if (workIndex === 1) {
      return (<StaticImage src="../../images/qbel-web-site.jpg" alt={`Image of ${workTitle}`} />)
    }
    if (workIndex === 2) {
      return (<StaticImage src="../../images/b-side-cafe-web-site.jpg" alt={`Image of ${workTitle}`} />)
    }
    if (workIndex === 3) {
      return (<StaticImage src="../../images/qbel-web-site.jpg" alt={`Image of ${workTitle}`} />)
    }
    if (workIndex === 4) {
      return (<StaticImage src="../../images/spas-curry-live-thumbnail.jpg" alt={`Image of ${workTitle}`} />)
    }
  }

  return (
    <div className="mb-20">
      <p className="mb-4 text-sm tracking-wide">{props.title}</p>
      <Link to={props.url}>
        <figure className="border border-gray-300 hover-transform">
          {getImage(props.workIndex, props.title)}
        </figure>
      </Link>
    </div>
  )
}
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

export default function Profile() {
  const breakpoints = useBreakpoint();

  return (
    <section className="mb-16 pt-12">
      <div className="mb-4 w-10/12 max-w-md mx-auto flex items-center">
        <p className="">Shimauma</p>
      </div>

      <div className="w-full max-w-md mx-auto flex flex-col">
        <figure className="w-2/3">
          <StaticImage
            src="../../images/profile-sample.jpeg"
            alt=""
          />
        </figure>
      </div>
    </section>
  )
}
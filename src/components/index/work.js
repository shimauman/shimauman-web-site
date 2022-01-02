import React from "react"
import WorkCard from "./workCard";

export default function Work() {
  const works = [
    {title: "Qbel Web Site", index: 1, url: `/qbel-web-site/`},
    {title: "B side cafe Web Site", index: 2, url: `/bsidecafe-web-site/`},
    {title: "Shimauma Web Site", index: 3, url: `/`},
    {title: "SPAS CURRY Youtube 24/7 Music Streaming Animation Thumbnail", index: 4, url: `/spascurry-music-streaming-animation-thumbnail/`},
  ]

  return (
    <section className="mb-24">
      <div className="mb-4 w-10/12 max-w-md mx-auto">
        {works.map((work, index) => (
          <WorkCard
            title={work.title}
            workIndex={work.index}
            url={work.url}
            key={index}
          />
        ))}
      </div>
    </section>
  )
}
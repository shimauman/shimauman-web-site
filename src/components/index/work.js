import React from "react"
import WorkCard from "./workCard";

export default function Work() {
  const works = [
    {title: "Qbel Web Site", index: 1, url: `/qbel-web-site/`},
    {title: "B side cafe Web Site", index: 2, url: `/bsidecafe-web-site/`},
    {title: "Shimauman Web Site", index: 3, url: `/shimauman-web-site/`},
    {title: "Shimauman Tils", index: 4, url: `/shimauman-tils/`},
    {title: "SPAS CURRY Youtube 24/7 Music Streaming Animation Thumbnail", index: 5, url: `/spascurry-music-streaming-animation-thumbnail/`},
  ]

  return (
    <section className="mb-32">
      <div className="w-10/12 max-w-md mx-auto">
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
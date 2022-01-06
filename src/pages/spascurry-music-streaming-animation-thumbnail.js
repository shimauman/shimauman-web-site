import React from "react"
import WorkDetail from "../templates/workDetail"

export default function SpasCurryMusicStreamingAnimationThumbnail({ location }) {
  const workElement = (
    <div className="w-full" style={{ aspectRatio: "16 / 9" }}>
      <iframe
        className="w-full h-full"
        width={640}
        height={360}
        src="https://www.youtube.com/embed/rL4M3cXNKRY"
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )

  return (
    <WorkDetail
      pageTitle="SPAS CURRY Youtube 24/7 Music Streaming Animation Thumbnail"
      pagePath={location.pathname}
      workHeadline="SPAS CURRY Youtube 24/7 Music Streaming Animation Thumbnail"
      workDescription="SPAS CURRY Youtube チャンネルの24/7ミュージック配信のサムネイルアニメーションを作成しました。"
      workReference={{label: "SPAS CURRY :", url: "https://www.youtube.com/c/SPASCURRY/featured"}}
      workTools={[
        {label: "Tools", names: "Adobe Photoshop / Adobe After Effects"},
      ]}
      workDisplay={workElement}
    />
  )
}

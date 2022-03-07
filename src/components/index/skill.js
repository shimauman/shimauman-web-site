import React from "react"

export default function Skill() {
  return (
    <section className="mb-16">
      <div className="w-10/12 max-w-md mx-auto">
        <h1 className="mb-4">Skills</h1>

        <div className="mb-8">
          <p className="mb-2 text-xs leading-relaxed">
            WEBシステム開発
          </p>
          <p className="text-xs leading-relaxed text-gray-500">
            PHP / Laravel / Ruby / Ruby on Rails / JavaScript / Vue.js / MySQL / Docker / AWS
          </p>
        </div>

        <div className="mb-8">
          <p className="mb-2 text-xs leading-relaxed">
            WEBサイト制作
          </p>
          <p className="text-xs leading-relaxed text-gray-500">
            Gatsby / Netlify / Contentful
          </p>
        </div>

        <div className="mb-8">
          <p className="mb-2 text-xs leading-relaxed">
            WEBデザイン
          </p>
          <p className="text-xs leading-relaxed text-gray-500">
            Adobe XD
          </p>
        </div>

        <div className="mb-8">
          <p className="mb-2 text-xs leading-relaxed">
            イラスト / バナー制作 / 広告制作
          </p>
          <p className="text-xs leading-relaxed text-gray-500">
            Adobe Photoshop / Adobe Illustrator
          </p>
        </div>

        <div className="">
          <p className="mb-2 text-xs leading-relaxed">
            アニメーション / 動画編集
          </p>
          <p className="text-xs leading-relaxed text-gray-500">
            Adobe After Effects
          </p>
        </div>
      </div>
    </section>
  )
}
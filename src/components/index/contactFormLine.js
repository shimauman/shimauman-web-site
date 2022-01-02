import React from "react"

export default function ContactFormLine() {
  return (
    <div className="mb-16">
      <div className="mb-4 flex items-center">
        <h1 className="mr-2">Contact By LINE</h1>
        <div className="inline-block p-1 rounded bg-green-400 text-white text-xs font-semibold">オススメ</div>
      </div>

      <p className="mb-8 text-xs text-center">
        <span className="inline-block text-left leading-relaxed text-gray-400">以下のLINEアカウントの登録ボタンを押した後、LINEにてメッセージをお送りください。</span>
      </p>

      <a className="block border border-gray-500 text-center py-3 tracking-wide">
        Shimauma公式LINEアカウント
      </a>
    </div>
  )
}

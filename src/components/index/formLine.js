import React from "react"

export default function FormLine() {
  return (
    <div className="">
      <div className="mb-6 flex items-center justify-center">
        <h2 className="mr-2 font-semibold text-lg">LINE</h2>
        <div className="inline-block p-1 rounded bg-gray-200 text-gray-800 text-xs font-semibold">オススメ</div>
      </div>

      <p className="mb-12 text-sm text-center">
        <span className="inline-block text-left leading-relaxed text-gray-500">以下のQbel Visit School 公式LINEアカウントの登録ボタンを押した後、LINEにてお申し込みなどのメッセージをお送りください。</span>
      </p>

      <a className="px-2 py-3 w-full block text-center text-sm rounded-full font-semibold text-white bg-indigo-500">公式LINEアカウント登録</a>
    </div>
  )
}

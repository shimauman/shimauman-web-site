import React from "react"

export default function FormMail() {
  return (
    <div className="">
      <h2 className="mb-8 font-semibold text-lg text-center">メール</h2>

      <form  action="https://formspree.io/f/xwkazqyp" method="POST" id="mail_form" className="">
        <p className="mb-6 flex flex-col">
          <label htmlFor="email" className="text-sm mb-2 text-gray-500">メールアドレス</label>
          <input type="email" name="email" id="email" className="h-8 rounded-full px-2 outline-none focus:outline-none appearance-none" required />
        </p>
        <p className="mb-12 flex flex-col">
          <label htmlFor="message" className="text-sm mb-2 text-gray-500">内容</label>
          <textarea name="message" id="message" className="h-80 rounded-2xl p-2 outline-none focus:outline-none appearance-none" required />
        </p>
        <p>
          <button type="submit" className="px-1 py-3 w-full block text-center text-sm rounded-full font-semibold text-white bg-indigo-500">送信</button>
        </p>
      </form>
    </div>
  )
}

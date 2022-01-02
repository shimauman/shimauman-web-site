import React from "react"

export default function ContactFormMail() {
  return (
    <div className="">
      <h1 className="mb-8">Contact By Email</h1>

      <form  action="https://formspree.io/f/mpzbwlop" method="POST" id="mail-form" className="">
        <div className="mb-4 flex flex-col">
          <label htmlFor="email" className="text-xs mb-2 text-gray-400">Your Email Address</label>
          <input type="email" name="email" id="email" className="h-8 px-2 outline-none focus:outline-none appearance-none" required />
        </div>

        <div className="mb-8 flex flex-col">
          <label htmlFor="message" className="text-xs mb-2 text-gray-400">Content</label>
          <textarea name="message" id="message" className="h-80 p-2 outline-none focus:outline-none appearance-none" required />
        </div>

        <button type="submit" className="py-3 w-full block text-center border border-gray-500">送信</button>
      </form>
    </div>
  )
}

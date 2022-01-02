import React from "react"
import ContactFormLine from "./contactFormLine"
import ContactFormMail from "./contactFormMail"

export default function Contact() {
  return (
    <section className="mb-24">
      <div className="w-10/12 max-w-md mx-auto">
        <p className="mb-12 text-xs leading-relaxed" id="contact">ご依頼やご相談など、お気軽にお問い合わせください。LINEとEmailの2つのお問い合わせ方法をご用意しています。</p>

        <ContactFormLine />
        <ContactFormMail />
      </div>
    </section>
  )
}
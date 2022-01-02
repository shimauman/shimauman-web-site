import React from "react"
import { Link } from "gatsby"

export default function ContactButton() {
  return (
    <section className="mb-16">
      <div className="py-8 w-10/12 max-w-md mx-auto">
        <Link to={`/#contact`} className="block border border-gray-800 text-center py-3">
          ご依頼・ご相談はこちら
        </Link>
      </div>
    </section>
  )
}
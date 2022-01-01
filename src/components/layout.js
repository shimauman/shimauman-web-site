import React from "react"
import "../styles/global.css"

export default function Layout({ children }) {
  return (
    <div className="bg-gray-50">
      {children}
    </div>
  )
}
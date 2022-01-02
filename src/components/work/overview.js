import React from "react"

export default function WorkOverview(props) {
  return (
    <div className="mb-16">
      <h1 className="mb-2 text-base">{props.headline}</h1>

      <p className="mb-6 text-gray-400">{props.description}</p>

      <div className="mb-12 flex flex-wrap items-center">
        <p className="mr-1 mb-1 text-xs text-gray-400">
          <span>{props.reference.label}</span>
        </p>

        <a href="https://qbel.netlify.app/" target="_blank" rel="noopener noreferrer" className="inline-block mb-1 text-blue-400 break-all">
          <span className="border-b border-blue-400">{props.reference.url}</span>
        </a>
      </div>

      {props.tools.map((eachTools, index) => (
        <p className="mb-2 text-xs text-gray-400" key={index}>
          <span>{eachTools.label} : </span>
          {eachTools.names}
        </p>
      ))}
    </div>
  )
}

import React from "react"

export default function HistoryItem(props) {
  return (
    <div>
      <div className="flex items-center">
        <div className="mr-4 flex-none w-2 h-2 rounded-full bg-gray-300"></div>

        <div className="flex flex-col">
          <p className="mb-1 text-xs leading-relaxed text-gray-400">{props.date}</p>
          <p className="text-xs leading-relaxed">{props.text}</p>
        </div>
      </div>
      <div className="my-2 w-1 h-8 border-r border-gray-300"></div>
    </div>
  )
}
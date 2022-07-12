import React from "react"
import HistoryItem from "./historyItem"

export default function History() {
  const historyItems = [
    {date: "2014 - 2018", text: "九州大学芸術工学部工業設計学科卒業。在学中にデザインや人間工学を学ぶ。"},
    {date: "2018 - 2019", text: "パナソニック株式会社に入社。デザイナーとして工業製品のデザインなどを担当。"},
    {date: "2020", text: "パナソニック退職後、プログラミングを独学。"},
    {date: "2020 -", text: "教育系ベンチャー企業でWEBエンジニアとして働く。"},
    {date: "2022 -", text: "WEBエンジニアとして働きながら、子供達の思考力とチームワーク力を伸ばす活動を行う予定。"},
  ]

  return (
    <section className="mb-16">
      <div className="w-10/12 max-w-md mx-auto">
        <h1 className="mb-4">Histories</h1>

        {historyItems.map((item, index) => (
          <HistoryItem
            date={item.date}
            text={item.text}
            key={index}
          />
        ))}
      </div>
    </section>
  )
}
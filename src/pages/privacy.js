import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function Privacy({ location }) {
  return (
    <Layout>
      <Seo
        pageTitle="プライバシーポリシー"
        pageDescription="プライバシーポリシーのページです。"
        pagePath={location.pathname}
      />
      <div className="max-w-2xl w-10/12 mx-auto pt-24 mb-24">
        <h1 className="font-semibold mb-4 text-xl">プライバシーポリシー</h1>


        <div className="mb-20">
          <p className="text-xs leading-relaxed">このウェブサイト(https://qbel.netlify.app/、以下「本サイト」といいます。)運営者・Qbel代表(以下「運営者」といいます。)は、以下のプライバシーポリシー（以下「本ポリシー」といいます。）を定め、個人情報保護法を遵守すると共に、適切なプライバシー情報の保護に努めます。</p>
        </div>


        <div className="mb-12">
          <h1 className="font-semibold mb-4">プライバシー情報の定義</h1>
          <p className="text-xs leading-relaxed mb-3">本ポリシーにおいて、個人情報とは、個人情報保護法第2条第1項により定義される個人情報を意味するものとします。</p>
        </div>


        <div className="mb-12">
          <h1 className="font-semibold mb-4">プライバシー情報の収集方法</h1>
          <p className="text-xs leading-relaxed">本サイトは、Qbelの公式LINEアカウントをフォローいただいた場合と、メールにてお申し込み・お問い合わせいただいた場合に、LINEアカウント名やメールアドレスなどの情報を取得します。</p>
        </div>


        <div className="mb-12">
          <h1 className="font-semibold mb-4">個人情報を収集・利用する目的</h1>
          <p className="text-xs leading-relaxed mb-3">本サイトにおいて個人情報を収集・利用する目的は、以下のとおりです。</p>
          <ul className="pl-9 list-decimal">
            <li className="text-xs leading-relaxed mb-2">お申し込み・お問い合わせに対応する目的</li>
            <li className="text-xs leading-relaxed mb-2">お知らせを配信する目的</li>
            <li className="text-xs leading-relaxed">その他上記の利用目的に付随する目的</li>
          </ul>
        </div>


        <div className="mb-12">
          <h1 className="font-semibold mb-4">個人情報の第三者提供</h1>
          <p className="text-xs leading-relaxed mb-3">運営者は、次に掲げる場合を除いて、あらかじめ同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。</p>
          <ul className="pl-9 list-decimal">
            <li className="text-xs leading-relaxed mb-2">法令に基づく場合</li>
            <li className="text-xs leading-relaxed mb-2">人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
            <li className="text-xs leading-relaxed mb-2">公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
            <li className="text-xs leading-relaxed mb-2">国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
            <li className="text-xs leading-relaxed">
              予め次の事項を告知あるいは公表をしている場合
              <ul className="my-3 pl-3 list-disc">
                <li className="text-xs leading-relaxed mb-2">利用目的に第三者への提供を含むこと</li>
                <li className="text-xs leading-relaxed mb-2">第三者に提供されるデータの項目</li>
                <li className="text-xs leading-relaxed mb-2">第三者への提供の手段または方法</li>
                <li className="text-xs leading-relaxed">本人の求めに応じて個人情報の第三者への提供を停止すること</li>
              </ul>
            </li>
            <li className="text-xs leading-relaxed">
              前項の定めにかかわらず、次に掲げる場合は第三者には該当しないものとします。
              <ul className="my-3 pl-3 list-disc">
                <li className="text-xs leading-relaxed mb-2">運営者が利用目的の達成に必要な範囲内において個人情報の取扱いの全部または一部を委託する場合</li>
                <li className="text-xs leading-relaxed">合併その他の事由による事業の承継に伴って個人情報が提供される場合</li>
              </ul>
            </li>
          </ul>
        </div>


        <div className="mb-12">
          <h1 className="font-semibold mb-4">個人情報の訂正および削除</h1>
          <p className="text-xs leading-relaxed mb-3">(1) 運営者の保有する自己の個人情報が誤った情報である場合には、運営者が定める手続きにより、運営者に対して個人情報の訂正または削除を請求することができます。</p>
          <p className="text-xs leading-relaxed">(2) 運営者は、前項の請求を受けてその請求に応じる必要があると判断した場合には、遅滞なく、当該個人情報の訂正または削除を行い、これを通知します。</p>
        </div>


        <div className="mb-12">
          <h1 className="font-semibold mb-4">プライバシーポリシーの変更</h1>
          <p className="text-xs leading-relaxed">本ポリシーの内容に変更があった際は、本サイトのNEWS項目で告知いたします。運営者が別途定める場合を除いて、変更後のプライバシーポリシーは、本サイトに掲載したときから効力を生じるものとします。</p>
        </div>


        <div className="mb-20">
          <h1 className="font-semibold mb-4">お問い合わせ窓口</h1>
          <p className="text-xs leading-relaxed mb-6">本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。</p>
          <ul>
            <li className="mb-3 text-xs">Email : qbelmanager2021@gmail.com</li>
            <li className="mb-3 text-xs">LINE : <span className="border-b border-solid border-gray-800">Qbel Visit School 公式LINEアカウント</span></li>
            <li className="text-xs text-gray-300">LINE : <span className="border-b border-solid border-gray-300">Qbel After School 公式LINEアカウント</span></li>
          </ul>
        </div>


        <p className="text-xs">
          <span>最終更新日 </span>
          <time>2021.12.21</time>
        </p>
      </div>
    </Layout>
  )
}

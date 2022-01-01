import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function Terms({ location }) {
  return (
    <Layout>
      <Seo
        pageTitle="利用規約"
        pageDescription="利用規約のページです。"
        pagePath={location.pathname}
      />
      <div className="max-w-2xl w-10/12 mx-auto pt-24 mb-24">
        <h1 className="font-semibold mb-4 text-xl">利用規約</h1>


        <div className="mb-20">
          <p className="text-xs leading-relaxed mb-3">このウェブサイト (https://qbel.netlify.app/、以下「本サイト」といいます。)のご利用にあたっては、事前にこの利用規約(以下「本規約」といいます。)をお読みいただき、同意された場合にのみご利用下さい。</p>
          <p className="text-xs leading-relaxed">本サイト運営者・Qbel代表(以下「運営者」といいます。)は、本規約の内容を変更する場合があります。大きな変更があった際は、本サイトのNEWS項目にてご報告します。</p>
        </div>


        <div className="mb-12">
          <h1 className="font-semibold mb-4">禁止事項</h1>
          <p className="text-xs leading-relaxed mb-3">(1) 本サイトのご利用に際し、次の行為は禁止いたします。</p>
          <ul className="mb-3 pl-9 list-decimal">
            <li className="text-xs leading-relaxed mb-2">運営者または第三者の財産もしくはプライバシー等を侵害する行為、または侵害する恐れのある行為</li>
            <li className="text-xs leading-relaxed mb-2">運営者または第三者に、不利益もしくは損害を与える行為、またはその恐れのある行為</li>
            <li className="text-xs leading-relaxed mb-2">公序良俗に反する行為、またはその恐れのある行為</li>
            <li className="text-xs leading-relaxed mb-2">犯罪行為もしくは犯罪行為に結びつく行為、またはその恐れのある行為</li>
            <li className="text-xs leading-relaxed mb-2">営業活動もしくは営利を目的とする行為、またはその準備を目的とする行為</li>
            <li className="text-xs leading-relaxed mb-2">コンピュータウィルス等有害なプログラムを使用または提供する行為</li>
            <li className="text-xs leading-relaxed mb-2">その他、法律、法令もしくは条例に違反する行為、またはその恐れのある行為</li>
            <li className="text-xs leading-relaxed">その他、運営者が不適切と判断する行為</li>
          </ul>
          <p className="text-xs leading-relaxed">(2) 運営者は、上記の禁止行為を発見した場合、サイトを使用する方(以下「使用者」といいます。)に事前に通知することなく、その全部または一部を削除することがあります。しかし、常に本サイトを監視する義務を負うものではありません。</p>
        </div>


        <div className="mb-12">
          <h1 className="font-semibold mb-4">著作権等</h1>
          <p className="text-xs leading-relaxed mb-3">(1) 本サイトに掲載されている情報に関わる著作権その他の権利は、運営者または運営者に使用を認めた権利者に帰属しますので、私的使用等法律によって認められる範囲を超えて、無断で使用（複製、改ざん、頒布等を含む。）することはできません。</p>
          <p className="text-xs leading-relaxed mb-3">(2) 運営者から使用者に電子メールやLINEチャットをお送りした場合には、その内容に関する著作権も、全て運営者に帰属しますので、無断で転用・転載することはできません。</p>
          <p className="text-xs leading-relaxed mb-3">(3) お申し込みやお問い合わせの際に、運営者にご提供いただいた情報等について、運営者は個人情報(日本国個人情報の保護に関する法律の定義によります。以下「個人情報」といいます。)に関わるものを除き、使用者に通知することなく、自由にこれを利用・二次利用することができるものとさせていただきますので、あらかじめご了承ください。</p>
          <p className="text-xs leading-relaxed">(4) 本サイトで使用される商標（トレードマーク、サービスマーク）は、運営者または運営者に使用を認めた権利者に帰属しますので、無断で使用することはできません。</p>
        </div>


        <div className="mb-12">
          <h1 className="font-semibold mb-4">免責事項</h1>
          <p className="text-xs leading-relaxed mb-3">(1) 運営者は、本サイトに掲載されている全ての情報を慎重に作成し、また管理します。しかし、その正確性および完全性等に関して、いかなる保証もするものではありません。</p>
          <p className="text-xs leading-relaxed mb-3">(2) 運営者は、予告なしに、本サイトの運営を停止または中止し、また本サイトに掲載されている情報の全部または一部を変更する場合があります。</p>
          <p className="text-xs leading-relaxed">(3) 使用者が本サイトをご利用されたこと、または何らかの原因によりこれをご利用できなかったことにより使用者に生じる一切の損害および第三者によるデータの書き込み、不正なアクセス、発言、メールの送信等に関して生じる一切の損害（使用者同士の間でトラブルが生じ、これにより使用者が被る損害を含みます。）について、運営者は、何ら責任を負うものではありません。</p>
        </div>


        <div className="mb-12">
          <h1 className="font-semibold mb-4">個人情報の取り扱い</h1>
          <p className="text-xs leading-relaxed mb-3">運営者は、本サイトで取得した使用者の個人情報を適正に取り扱うことをお約束いたします。</p>
          <p className="text-xs leading-relaxed mb-3">個人情報の利用目的</p>
          <ul className="pl-9 list-decimal">
            <li className="text-xs leading-relaxed mb-2">Qbel Visit School / Qbel After School 公式LINEアカウントにおいて、フォロワーにお知らせを配信するため。</li>
            <li className="text-xs leading-relaxed mb-2">Qbel Visit School / Qbel After School 公式LINEアカウントにおいて、お申し込みやお問い合わせいただいた内容についてやり取りをするため。</li>
            <li className="text-xs leading-relaxed mb-2">メールにてお知らせを配信するため。</li>
            <li className="text-xs leading-relaxed">メールにてお申し込みやお問い合わせいただいた内容についてやり取りをするため。</li>
          </ul>
        </div>


        <div className="mb-12">
          <h1 className="font-semibold mb-4">リンクサイト</h1>
          <p className="text-xs leading-relaxed">本サイトから、または本サイトへリンクを張っている第三者のウェブサイト(以下「リンクサイト」といいます。)の内容およびリンクサイトの利用により生じる一切の損害について、運営者は、いかなる責任も負うものではありません。本サイトへのリンクは原則として自由です。しかし、リンクサイトの内容（公序良俗に反する等）やリンクの方法によっては、事前事後にかかわらず、リンクをお断りする場合があります。</p>
        </div>


        <div className="mb-20">
          <h1 className="font-semibold mb-4">お問い合わせ窓口</h1>
          <p className="text-xs leading-relaxed mb-6">本規約に関するお問い合わせは、下記の窓口までお願いいたします。</p>
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

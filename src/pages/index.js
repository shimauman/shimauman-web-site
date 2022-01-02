import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Profile from "../components/index/profile"
import History from "../components/index/history"
import Skill from "../components/index/skill"
import Tool from "../components/index/tool"
import ContactButton from "../components/index/contactButton"
import Work from "../components/index/work"
import Contact from "../components/index/contact"

export default function index() {
  return <Layout>
    <Seo />
    <Profile />
    <History />
    <Skill />
    <Tool />
    <ContactButton />
    <Work />
    <Contact />
  </Layout>
}

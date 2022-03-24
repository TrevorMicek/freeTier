import React, { useEffect } from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import FeatureSection from '../components/tailwindComps/FeatureSection'
import CTA from '../components/tailwindComps/HomeCTA'
import Portfolio from '../components/tailwindComps/Portfolio'
import Form from '../components/tailwindComps/Contact'
const IndexPage = () => {

  return (
  <Layout title="Sign up" text="for our free tier" pageLayout={{gridTemplateRows: "[top-gutter] auto [top-padding] auto [first] auto [second] auto "}}>
    <SEO title="Home" />

    <FeatureSection />
    <Form />

  </Layout>
  )
}
export default IndexPage

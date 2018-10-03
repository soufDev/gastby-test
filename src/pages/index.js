import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p><Link to="/page-2/">Go to page 2</Link></p>
    <p><Link to="/page-3/">Go to page 3</Link></p>
  </Layout>
)

export default IndexPage

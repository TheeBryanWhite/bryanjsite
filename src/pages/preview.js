import * as React from 'react'
import { withPreviewResolver } from 'gatsby-source-prismic'

import linkResolver from '../utilities/linkResolver'

import Layout from '../components/layout'

const PreviewPage = ({ isPreview, isLoading, previewData }) => {
  if (isPreview === false) return 'Not a preview!'

  return (
    <Layout>
      <div className="container previews">
        <h1>Loading preview data</h1>
      </div>
    </Layout>
  )
}

export default withPreviewResolver(PreviewPage, {
  repositoryName: 'bryanjsite',
  linkResolver,
})

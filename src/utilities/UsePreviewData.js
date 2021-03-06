import { useMemo } from 'use-memo-one'
import { mergePrismicPreviewData } from 'gatsby-source-prismic'

const IS_BROWSER = typeof window !== 'undefined'

const usePreviewData = (staticData) => {
  return useMemo(() => {
    if (!IS_BROWSER || !window.__PRISMIC_PREVIEW_DATA__) return staticData

    return mergePrismicPreviewData({
      staticData,
      previewData: window.__PRISMIC_PREVIEW_DATA__,
    })
  }, [staticData])
}

export default usePreviewData
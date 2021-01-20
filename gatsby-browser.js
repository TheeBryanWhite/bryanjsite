import React from 'preact'
import { PreviewStoreProvider } from 'gatsby-source-prismic'

require("typeface-open-sans")

export const wrapRootElement = ({ element }) => {
  return (
	<PreviewStoreProvider>
		{element}
	</PreviewStoreProvider>
  );
}
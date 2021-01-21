import React from 'preact'
import { PreviewStoreProvider } from 'gatsby-source-prismic'

export const wrapRootElement = ({ element }) => {
  return (
	<PreviewStoreProvider>
		{element}
	</PreviewStoreProvider>
  );
}

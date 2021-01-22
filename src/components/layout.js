import React from "preact/compat"
import { useStaticQuery, graphql } from "gatsby"
import styled from '@emotion/styled'
import { css } from "@emotion/react"
import Helpers from '../utilities/Helpers'

import Header from "./header"
import "./layout.css"

let black = new Helpers('black')
let yellow = new Helpers('yellow')

const containerMargin = new Helpers(32)
const Container = styled.div`
  margin: 0 ${containerMargin.toRem};
  max-width: 1440px;
  padding: ${containerMargin.toRem} 0;
  text-align: center;
`

const linkStyle = css `
  background-color: rgb(${yellow.defaultColors()});
  color: rgb(${black.defaultColors()});
  text-decoration: none;
`

const linkUnderline = css({
  'textDecoration': 'underline'
})

const linkHover = css({
  '&:hover,&:focus': linkUnderline
})

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          <Container>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a css={[linkStyle, linkHover]} href="https://www.gatsbyjs.com" target="_blank" rel="noreferrer">Gatsby</a>, Powered by <a css={[linkStyle, linkHover]} href="https://www.gatsbyjs.com" target="_blank" rel="noreferrer">Prismic</a> | <span>Computer photo credit: <a css={[linkStyle, linkHover]} href="https://unsplash.com/@clark_fransa?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Arnold Francisca</a> on <a css={[linkStyle, linkHover]} href="https://unsplash.com/s/photos/code?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
          </Container>
        </footer>
      </div>
    </>
  )
}

export default Layout

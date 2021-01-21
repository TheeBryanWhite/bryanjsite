import React from "preact"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import Helpers from '../utilities/Helpers'
import GlobalStyles from "../utilities/GlobalStyles"
import { ReactComponent as SVGGithub } from '../svg/github.svg'
import { ReactComponent as SVGCodepen } from '../svg/codepen.svg'
import { ReactComponent as SVGTwitter } from '../svg/twitter.svg'
import { ReactComponent as SVGChat } from '../svg/chat.svg'

let black = new Helpers('black')
let white = new Helpers('white')
let yellow = new Helpers('yellow')

const containerMargin = new Helpers(32)
const Container = styled.div`
  margin: 0 ${containerMargin.toRem}
`

const HeaderComp = styled.header`
  background-color: rgba(${black.defaultColors()}, 0.8);
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`

const SocialList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
`

const SocialItem = styled.li`
  margin: 0;
`

const icon = css`
  fill: rgb(${yellow.defaultColors()});
  opacity: 1;
  transition: all 0.2s linear;
  width: 40px;
`
const hideThis = new GlobalStyles()
const ScreenReaderText = css`${hideThis.screenReaderText()}`

const buttonPadding = css`
  display: block;
  padding: 15px;
`
const hoverwhite = css({
  fill: `rgb(${white.defaultColors()})`
})

const hoverOrFocus = css({
  '&:hover,&:focus': hoverwhite
})

const Header = () => (
  <HeaderComp>
    <Container>
      <SocialList>
        <SocialItem>
          <a css={buttonPadding} href="https://github.com/TheeBryanWhite" target="_blank" rel="noreferrer">
            <SVGGithub css={[icon, hoverOrFocus]} />
            <span css={ScreenReaderText} className="screen-reader-text">Github</span>
          </a>
        </SocialItem>
        <SocialItem>
          <a css={buttonPadding} href="https://codepen.io/ThatWerewolfTho" target="_blank" rel="noreferrer">
            <SVGCodepen css={[icon, hoverOrFocus]} />
            <span css={ScreenReaderText} className="screen-reader-text">Codepen</span>
          </a>
        </SocialItem>
        <SocialItem>
          <a css={buttonPadding} href="https://twitter.com/ThatWerewolfTho" target="_blank" rel="noreferrer">
            <SVGTwitter css={[icon, hoverOrFocus]} />
            <span css={ScreenReaderText} className="screen-reader-text">Twitter</span>
          </a>
        </SocialItem>
        <SocialItem>
          <a css={buttonPadding} href="mailto:bryan@bryanjwhite.com">
            <SVGChat css={[icon, hoverOrFocus]} />
            <span css={ScreenReaderText} className="screen-reader-text">Email</span>
          </a>
        </SocialItem>
      </SocialList>
    </Container>
  </HeaderComp>
)

export default Header

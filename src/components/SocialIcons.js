import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styled from "styled-components"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      emailIcon: file(relativePath: { eq: "icon-email.png" }) {
        childImageSharp {
          fixed(width: 40, height: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      githubIcon: file(relativePath: { eq: "icon-github.png" }) {
        childImageSharp {
          fixed(width: 40, height: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      linkedinIcon: file(relativePath: { eq: "icon-linkedin.png" }) {
        childImageSharp {
          fixed(width: 40, height: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      twitterIcon: file(relativePath: { eq: "icon-twitter.png" }) {
        childImageSharp {
          fixed(width: 40, height: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Wrapper>
      <a href="mailto: contact@hoshki.me">
        <Img fixed={data.emailIcon.childImageSharp.fixed} alt="email" />
      </a>
      <a href="https://github.com/hoshikitsunoda" target="_blank">
        <Img fixed={data.githubIcon.childImageSharp.fixed} alt="github" />
      </a>
      <a href="https://www.linkedin.com/in/hoshki-tsunoda/" target="_blank">
        <Img fixed={data.linkedinIcon.childImageSharp.fixed} alt="linkedin" />
      </a>
      <a href="https://twitter.com/hoshki_tzu" target="_blank">
        <Img fixed={data.twitterIcon.childImageSharp.fixed} alt="twitter" />
      </a>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export default Image
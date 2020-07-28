import React from "react"
import { graphql, useStaticQuery } from "gatsby"
// import Img from "gatsby-image"

import Icon from "./UI/Icon"

import styled from "styled-components"

const Skills = () => {
  const data = useStaticQuery(graphql`
    query {
      javascriptIcon: file(relativePath: { eq: "skills/icon-javascript.png" }) {
        childImageSharp {
          fixed(width: 74, height: 74) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      reactIcon: file(relativePath: { eq: "skills/icon-react.png" }) {
        childImageSharp {
          fixed(width: 74, height: 74) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      nodejsIcon: file(relativePath: { eq: "skills/icon-nodejs.png" }) {
        childImageSharp {
          fixed(width: 74, height: 74) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      mongodbIcon: file(relativePath: { eq: "skills/icon-mongoDB.png" }) {
        childImageSharp {
          fixed(width: 74, height: 74) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      sassIcon: file(relativePath: { eq: "skills/icon-sass.png" }) {
        childImageSharp {
          fixed(width: 74, height: 74) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      photoshopIcon: file(relativePath: { eq: "skills/icon-photoshop.png" }) {
        childImageSharp {
          fixed(width: 74, height: 74) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      illustratorIcon: file(
        relativePath: { eq: "skills/icon-illustrator.png" }
      ) {
        childImageSharp {
          fixed(width: 74, height: 74) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      figmaIcon: file(relativePath: { eq: "skills/icon-figma.png" }) {
        childImageSharp {
          fixed(width: 74, height: 74) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Background>
      <h1>SKILLS:</h1>
      <IconWrapper>
        {Object.keys(data).map((item, i) => {
          return (
            <Icon
              section="skills"
              key={i}
              fixed={data[item].childImageSharp.fixed}
              alt={item.substring(0, item.length - 4)}
            />
          )
        })}
      </IconWrapper>
    </Background>
  )
}

const Background = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background-color: rgba(77, 77, 77, 0.3);
  padding: 0 0.75rem 0.5rem;

  h1 {
    flex: 0 1 10%;
    font-family: "Coda", cursive;
    font-size: 1.2rem;
    color: #fff;
    margin: 0;
    text-shadow: 6px 6px 0 #011a27;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 1.25rem 1.75rem 0.5rem;
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 1rem;
    }
  }
`

const IconWrapper = styled.div`
  flex: 0 1 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0 0.2rem;

  @media (min-width: 768px) {
    margin-left: 1rem;
    box-shadow: 6px 6px 0 #011a27;
    border: 0.025rem solid #011a27;
    margin-bottom: 1rem;
    padding: 0.75rem;
    background-color: rgba(0, 0, 0, 0.3);
  }
`

export default Skills

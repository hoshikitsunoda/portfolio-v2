import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styled from "styled-components"

const Intro = () => {
  const data = useStaticQuery(graphql`
    query {
      profile: file(relativePath: { eq: "profile.png" }) {
        childImageSharp {
          fixed(width: 110, height: 110) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Wrapper>
      <ProfileImg fixed={data.profile.childImageSharp.fixed} alt="Profile" />
      <TextWrapper>
        <p>
          My name is<span className="accent-text"> Hosh’ki Tsunoda</span>.{" "}
          <br></br>
          <span className="accent-text">Front End</span> Developer.{" "}
          <br className="break"></br>
          <span className="accent-text">UI</span> Developer.
          <br></br>Based in{" "}
          <span className="white-text">Orange County, CA</span>.
        </p>
      </TextWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 4rem;
  width: 100%;

  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 0;
    width: auto;
  }
`

const ProfileImg = styled(Img)`
  display: block !important;
  margin: 0 auto -1rem;
  border-radius: 0.2rem;
  border: 0.1rem solid #011a27;

  @media (min-width: 768px) {
    margin: -12px 0 0 -6px;
    border-radius: 0 0 0 0;
    box-shadow: 6px 6px 0 #011a27;
    margin-left: -6px;
    margin-top: -12px;
  }
`

const TextWrapper = styled.div`
  background-color: rgba(77, 77, 77, 0.3);
  text-align: center;
  padding: 1.55rem 0.5rem 0.7rem;

  p {
    color: #fff;
    font-size: 1rem;
    font-weight: 800;
    font-family: "Open Sans", sans-serif;
    margin-bottom: 0;
    letter-spacing: 0.05rem;
    line-height: 1.3rem;

    .accent-text {
      font-family: "Coda", cursive;
    }
  }

  @media (min-width: 768px) {
    padding: 1.175rem 1.3rem 1.1rem 1.7rem;

    p {
      text-align: left;
      font-size: 0.9rem;
      line-height: 1.2rem;

      .break {
        display: none;
      }
    }
  }

  @media (min-width: 1024px) {
    padding: 1.175rem 1rem 1.1rem 1.7rem;

    p {
      text-align: left;
      font-size: 0.8rem;
      line-height: 1.2rem;
    }
  }
`

export default Intro

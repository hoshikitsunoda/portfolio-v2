import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"

const BlogPost = ({ node: { excerpt, frontmatter } }) => {
  return (
    <>
      <Panel key={frontmatter.slug}>
        <PanelTop>
          <div>
            <Time dateTime={frontmatter.date}>{frontmatter.date}</Time>
          </div>
          <Title>
            <Link to={frontmatter.slug}>{frontmatter.title}</Link>
          </Title>
        </PanelTop>
        <PanelBottom>
          <Excerpt>{excerpt}</Excerpt>
          <CustomLink to={frontmatter.slug}>Read more...</CustomLink>
        </PanelBottom>
      </Panel>
    </>
  )
}

const Panel = styled.div`
  flex: 0 0 100%;
  margin: 0 auto 0.5rem;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.main1};
  box-shadow: inset 7px 7px 15px ${({ theme }) => theme.colors.main2},
    inset -7px -7px 15px ${({ theme }) => theme.colors.main3};

  > * {
    font-family: ${({ theme }) => theme.fonts.main};
  }

  @media (min-width: 900px) {
    flex: 0 0 calc(50% - 1rem);
    margin: 0.5rem;
  }
`

const PanelTop = styled.div`
  padding: 1rem 1rem 0;
`

const PanelBottom = styled.div`
  border-radius: 0 0 20px 20px;
  padding: 0.5rem 1rem 1rem;
  background-color: ${({ theme }) => theme.colors.opaqueBg1};
  box-shadow: 0 -6px 10px -6px ${({ theme }) => theme.colors.opaqueBg1};

  > * {
    color: ${({ theme }) => theme.colors.textAccent};
  }
`

const Time = styled.time`
  font-size: 0.75rem;
`

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.bold};
  margin: 0.2rem 0 1rem;
  transition: all 0.2s ease-in;
  min-height: 3.5rem;

  > a {
    color: ${({ theme }) => theme.colors.dark1};
    text-decoration: none;
    font-size: 1.25rem;
    transition: all 0.2s ease-in;
  }

  &:hover {
    > a {
      color: ${({ theme }) => theme.colors.textAccent};
    }
  }
`

const Excerpt = styled.p`
  margin-bottom: 0.5rem;
  font-size: 1rem;
`

const CustomLink = styled(Link)`
  color: ${({ theme }) => theme.colors.dark1};
  text-decoration: none;
  transition: all 0.2s ease-in;
  font-size: 0.8rem;

  &:hover {
    color: ${({ theme }) => theme.colors.textAccent};
  }
`

export default BlogPost
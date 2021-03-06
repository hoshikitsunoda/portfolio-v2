import React from "react"
import { Router, Location } from "@reach/router"
import posed, { PoseGroup } from "react-pose"

const RouteContainer = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 300,
    transition: {
      y: { type: "spring", stiffness: 100, damping: 0 },
      default: { duration: 300 },
    },
  },
  exit: {
    y: 0,
    opacity: 1,
    transition: { duration: 10 },
  },
})

const PosedRouter = ({ children }) => (
  <Location>
    {({ location }) => (
      <PoseGroup>
        <RouteContainer key={location.pathname}>
          <Router location={location}>{children}</Router>
        </RouteContainer>
      </PoseGroup>
    )}
  </Location>
)

export default PosedRouter

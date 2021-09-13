import * as React from "react"
import { useMediaQuery } from "react-responsive"
import { Link } from "gatsby"
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}


const contactText =
  <div>
    <h1 style={{
      margin: 0, color: `white`,
      textDecoration: `none`,
    }}>
      Contact: 206-673-1526
    </h1>
  </div>

const aboutMe =
  <div>
    <Link style={{ textDecoration: 'none', color: "black" }} to="/aboutme">
      <h1 style={{
        margin: 0, color: `black`,
        textDecoration: `none`,
      }}>
        About Me
      </h1>
    </Link>
  </div>

// const phoneNumber =
//   <h1 style={{
//     margin: 0, color: `white`,
//     textDecoration: `none`,
//   }}>
//     206-673-1526
//   </h1>

const Footer = () => (
  <footer
    style={{
      background: 'rgb(255, 142, 142)',
      marginTop: `1.5rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Default>
        {/* <div style={{ display: "grid", gridTemplateColumns: "2fr 2fr", gridGap: 20 }}> */}
        <div style={{ display: "grid", gridTemplateColumns: "3fr 1fr", gridGap: 20 }}>
          {/* {contactText}
          {phoneNumber} */}
          {contactText}
          {aboutMe}
        </div>
      </Default>
      <Mobile>
        {/* {contactText}
        {phoneNumber} */}
        {contactText}
        <div style={{ marginTop: '1rem' }}></div>
        {aboutMe}
      </Mobile>
    </div>
  </footer>
)


export default Footer

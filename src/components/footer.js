import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Footer = () => (
  <footer
    style={{
      // background: `rebeccapurple`,
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
      <div style={{ display: "grid", gridTemplateColumns: "2fr 2fr", gridGap: 20 }}>
        <div>
          <h1 style={{
            margin: 0, color: `white`,
            textDecoration: `none`,
          }}>

            Contact

          </h1>
        </div>
        <h1 style={{
          margin: 0, color: `white`,
          textDecoration: `none`,
        }}>

          206-673-1526

        </h1>
      </div>
    </div>

  </footer>
)


export default Footer

import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <div style={{ display: "grid", gridTemplateColumns: "1.3fr 3fr", gridGap: 20 }}>

      <div>
        <StaticImage
          src="../images/bj-with-dogs.png"
          // width={250}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Brenna with our dogs"
          // objectFit="fill"
          style={{ marginBottom: `1.45rem`, marginRight: `1rem`, borderStyle: 'solid', borderWidth: 'thin', borderRadius: '10px', borderColor: 'white' }}
        />
      </div>
      <div>
        <h1>Hello!</h1>
        <h3>I'm a coach, personal trainer, and lover of animals. </h3>
        <p>I'm a Seattle native and have recently moved to south Richmond with my husband and four pets. We are loving the outdoors and exploring the east coast and Virginia.</p>
        <p> I'm an ACE certified personal trainer since 2019 and Gymnastics Coach, with over eight years experience designing programs for both competitive teams and group classes. I also have eight years experience fostering animals and three years experience working at a humane society.</p>
      </div>
    </div>


    <h1>Services</h1>
    <div style={{ display: "grid", gridTemplateColumns: "2fr 2fr", gridGap: 20 }}>
      <div style={{ borderRadius: '6px', boxShadow: '0 10px 16px 0 rgb(0 0 0 / 24%)', padding: '25px' }}>
        <h2>Petsitting</h2>
        <p>I offer:</p>
        <li>Short-term boarding</li>
        <li>Dogwalks (within a five mile distance)</li>
        <li>Housevisits/Housesitting (within a five mile distance)</li>
        <p> </p>
        {/* <button>Schedule Now</button> */}
        <p> </p>
      </div>
      <div style={{ borderRadius: '6px', boxShadow: '0 10px 16px 0 rgb(0 0 0 / 24%)', padding: '25px' }}>
        <h2>Personal Fitness</h2>
        <p>Currently not accepting any new clients. Check back later if interested!</p>
      </div>
    </div>











    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p> */}
  </Layout >
)

export default IndexPage

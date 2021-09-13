import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Default, Mobile } from "../media/queries"


const sunSalutationImage =
    <StaticImage
        src="../images/coaching/sunsalutation.png"
        // width={250}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Kennel"
        // objectFit="fill"
        style={{ borderStyle: 'solid', borderWidth: 'thin', borderRadius: '10px', borderColor: 'white' }}
    />
const gym1Image =
    <StaticImage
        src="../images/coaching/gym1.png"
        // width={250}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Kennel"
        // objectFit="fill"
        style={{ borderStyle: 'solid', borderWidth: 'thin', borderRadius: '10px', borderColor: 'white' }}
    />
const gym2Image =
    <StaticImage
        src="../images/coaching/gym2.png"
        // width={250}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Kennel"
        // objectFit="fill"
        style={{ borderStyle: 'solid', borderWidth: 'thin', borderRadius: '10px', borderColor: 'white' }}
    />
const gym3Image =
    <StaticImage
        src="../images/coaching/gym3.png"
        // width={250}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Kennel"
        // objectFit="fill"
        style={{ borderStyle: 'solid', borderWidth: 'thin', borderRadius: '10px', borderColor: 'white' }}
    />

const zoom =
    <div style={{ borderRadius: '6px', boxShadow: '0 10px 16px 0 rgb(0 0 0 / 24%)', padding: '25px' }}>
        <h2>Zoom availability: Workout sessions </h2>
        <li>$25 per hour for a private workout </li>
        <li>$40 per hour for 2 people</li>
        <li>$50 per hour for 3 people</li>
    </div>

const inperson =
    <div style={{ borderRadius: '6px', boxShadow: '0 10px 16px 0 rgb(0 0 0 / 24%)', padding: '25px' }}>
        <h2>In person training: </h2>
        <li>$45 per hour for a private session</li>
        <li>$60 per hour for 2 people</li>
        <li>$75 per hour for 3 people</li>
    </div>



const CoachingPage = () => (
    <Layout>
        <Seo title="Coaching" />
        <h1>Personal Training</h1>
        <p style={{ fontStyle: "italic" }}>Free consultations</p>
        <Default>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1.5fr", gridGap: 20, marginBottom: "2rem" }}>
                {gym2Image}
                {gym3Image}
            </div>
        </Default>
        <Mobile>
            <div style={{ display: "grid", gridGap: 20, marginBottom: '2rem' }}>
                {gym2Image}
                {gym3Image}
            </div>
        </Mobile>
        <Default>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1.5fr", gridGap: 20, marginBottom: "2rem" }}>
                {zoom}
                {gym1Image}
            </div>
        </Default>
        <Mobile>
            <div style={{ display: "grid", gridGap: 20, marginBottom: '2rem' }}>
                {gym1Image}
                {zoom}
            </div>
        </Mobile>
        <Default>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1.5fr", gridGap: 20, marginBottom: "2rem" }}>
                {inperson}
                {sunSalutationImage}
            </div>
        </Default>
        <Mobile>
            <div style={{ display: "grid", gridGap: 20, marginBottom: '2rem' }}>
                {sunSalutationImage}
                {inperson}
            </div>
        </Mobile>



    </Layout >
)

export default CoachingPage

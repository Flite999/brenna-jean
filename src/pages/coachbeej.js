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

const gymnastics =
    <div style={{ borderRadius: '6px', boxShadow: '0 10px 16px 0 rgb(0 0 0 / 24%)', padding: '25px' }}>
        <h2>Gymnastics: kids 5-18 can take gymnastics classes and/or private lessons at:
        </h2>
        <li><a href="https://goo.gl/maps/bXF2DxheXwxt4nm27">Aerial East Gymnastics</a></li>
        <li>8800 Bell Creek Rd, Mechanicsville, VA 23116</li>
        <li>Private lessons @ Aerial East are $45 (gym fee not included, contact AEG for scheduling)</li>
    </div>
const zoom =
    <div style={{ borderRadius: '6px', boxShadow: '0 10px 16px 0 rgb(0 0 0 / 24%)', padding: '25px' }}>
        <h2>Zoom availability: Workout sessions </h2>
        <li>$30 per hour for a private workout </li>
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
const preappt =
    <div style={{ borderRadius: '6px', boxShadow: '0 10px 16px 0 rgb(0 0 0 / 24%)', padding: '25px' }}>
        <h2>Be prepared to answer: </h2>
        <li>What are your goals? Weight loss, just get moving, build muscle, etc
        </li>
        <li>How often per week do you want to workout? Let’s be realistic here!</li>
        <li>Where are you currently at with exercise?
        </li>
        <li>What are your favorite ways to get moving? </li>
    </div>

const tips =
    <div style={{ borderRadius: '6px', boxShadow: '0 10px 16px 0 rgb(0 0 0 / 24%)', padding: '25px' }}>
        <h2>Tips appreciated</h2>
        <li>paypal, cash app, cash only</li>
        <li>Paypal.me/brennajean88</li>
        <li>Cash app @brennajean88</li>

    </div>

const certifications =
    <div style={{ borderRadius: '6px', boxShadow: '0 10px 16px 0 rgb(0 0 0 / 24%)', padding: '25px' }}>
        <h2>Certifications</h2>
        <li>CPR Certified</li>
        <li>U100, W200, U102 First Aid</li>
        <li>U101 Fundamentals of Gymnastics Instruction</li>
        <li>U103 Gymnastics Fitness</li>
        <li>T200 trampoline and tumbling</li>
        <li>A200 Acro-basics</li>
        <li>Background checked and Safesport Certified</li>

    </div>


const CoachingPage = () => (
    <Layout>
        <Seo title="Coaching" />
        <h1>Personal Training</h1>

        <p style={{ fontStyle: "italic" }}>Free consultations</p>
        <Default>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1.5fr", gridGap: 20, marginBottom: "2rem" }}>
                {certifications}
                {gym2Image}
            </div>
        </Default>
        <Mobile>
            <div style={{ display: "grid", gridGap: 20, marginBottom: '2rem' }}>
                {certifications}
                {gym2Image}
            </div>
        </Mobile>
        <Default>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1.5fr", gridGap: 20, marginBottom: "2rem" }}>
                {gymnastics}
                {gym3Image}
            </div>
        </Default>
        <Mobile>
            <div style={{ display: "grid", gridGap: 20, marginBottom: '2rem' }}>
                {gymnastics}
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
        <Default>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1.5fr", gridGap: 20, marginBottom: "2rem" }}>
                {preappt}
                {tips}
            </div>
        </Default>
        <Mobile>
            <div style={{ display: "grid", gridGap: 20, marginBottom: '2rem' }}>
                {preappt}
                {tips}
            </div>
        </Mobile>



    </Layout >
)

export default CoachingPage

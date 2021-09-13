import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Default, Mobile } from "../media/queries"


const bjAriImage =
    <StaticImage
        src="../images/aboutme/bjari.png"
        // width={250}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Kennel"
        // objectFit="fill"
        style={{ borderStyle: 'solid', borderWidth: 'thin', borderRadius: '10px', borderColor: 'white' }}
    />
const smileImage =
    <StaticImage
        src="../images/aboutme/smile.png"
        // width={250}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Kennel"
        // objectFit="fill"
        style={{ borderStyle: 'solid', borderWidth: 'thin', borderRadius: '10px', borderColor: 'white' }}
    />
const walkingImage =
    <StaticImage
        src="../images/aboutme/walking.png"
        // width={250}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Kennel"

        //objectFit="fill"
        style={{ borderStyle: 'solid', borderWidth: 'thin', borderRadius: '10px', borderColor: 'white', display: 'flex' }}
    />

const petCare =
    <div style={{ borderRadius: '6px', boxShadow: '0 10px 16px 0 rgb(0 0 0 / 24%)', padding: '25px' }}>
        <h2>Pet Care Experience:</h2>
        <li>Certified veterinary assistant</li>
        <li>3 years working in an animal shelter overseeing all cat rooms, including sick cats</li>
        <li>13 years experience fostering cats, kittens and dogs including neonatal babies, feral cats, injured, sick and dying animals</li>
        <li>Pet owner for 20 years</li>
        <li>Trained 5 personal dogs</li>
        <li>Pet sitter for 20 years</li>
    </div>

const coachingExp =
    <div style={{ borderRadius: '6px', boxShadow: '0 10px 16px 0 rgb(0 0 0 / 24%)', padding: '25px' }}>
        <h2>Exercise and Coaching Experience:</h2>
        <li>Gymnast for nine years competing at a USA gymnastics level 6</li>
        <li>Coaching gymnastics professionally since 2016</li>
        <li>USA gymnastics courses: coming soon</li>
        <li>ACE certified personal trainer since 2019</li>
        <li>Fitness Nutrition Specialist since 2020</li>
    </div>



const aboutmePage = () => (
    <Layout>
        <Seo title="About Me" />
        <h1>About Me</h1>
        <div style={{ marginBottom: '2rem' }}>
            {walkingImage}
        </div>
        <Default>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1.5fr", gridGap: 20, marginBottom: "2rem" }}>
                {petCare}
                {bjAriImage}
            </div>
        </Default>
        <Mobile>
            <div style={{ display: "grid", gridGap: 20, marginBottom: '2rem' }}>
                {bjAriImage}
                {petCare}
            </div>
        </Mobile>
        <Default>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1.5fr", gridGap: 20, marginBottom: "2rem" }}>
                {coachingExp}
                {smileImage}
            </div>
        </Default>
        <Mobile>
            <div style={{ display: "grid", gridGap: 20, marginBottom: '2rem' }}>
                {smileImage}
                {coachingExp}
            </div>
        </Mobile>


    </Layout >
)

export default aboutmePage

import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Default, Mobile } from "../media/queries"


const kennelImage =
    <StaticImage
        src="../images/petsitting/kennel.png"
        // width={250}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Kennel"
        // objectFit="fill"
        style={{ borderStyle: 'solid', borderWidth: 'thin', borderRadius: '10px', borderColor: 'white' }}
    />

const yardImage =
    <StaticImage
        src="../images/petsitting/dogsyard.png"
        // width={250}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Dogs in the yard"
        // objectFit="fill"
        style={{ borderStyle: 'solid', borderWidth: 'thin', borderRadius: '10px', borderColor: 'white' }}
    />
const dogsBeachImage =
    <StaticImage
        src="../images/petsitting/dogsatbeach.png"
        // width={250}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Dogs at the beach"
        // objectFit="fill"
        style={{ borderStyle: 'solid', borderWidth: 'thin', borderRadius: '10px', borderColor: 'white' }}
    />
const dogsdcImage =
    <StaticImage
        src="../images/petsitting/dc.png"
        // width={250}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="At DC"
        // objectFit="fill"
        style={{ borderStyle: 'solid', borderWidth: 'thin', borderRadius: '10px', borderColor: 'white' }}
    />
const puppyImage =
    <StaticImage
        src="../images/petsitting/puppy.png"
        // width={250}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Puppy"
        // objectFit="fill"
        style={{ borderStyle: 'solid', borderWidth: 'thin', borderRadius: '10px', borderColor: 'white' }}
    />

const petboarding =
    <div style={{ borderRadius: '6px', boxShadow: '0 10px 16px 0 rgb(0 0 0 / 24%)', padding: '25px' }}>
        <h2>Pet Boarding (in my home)</h2>
        <p style={{ fontStyle: 'italic' }}>All dogs must be vaccinated to be boarded</p>
        <li>Dogs not potty trained are $25 extra per night</li>
        <li>$40 per night for dogs (includes minimum 1 hour walk)</li>
        <li>$20 per night for cats (they will have a separate room away from other animals)</li>
    </div>

const petsitting =
    <div style={{ borderRadius: '6px', boxShadow: '0 10px 16px 0 rgb(0 0 0 / 24%)', padding: '25px' }}>
        <h2>Pet Sitting</h2>
        <li>In your home (within 10 mile distance, every extra 5 miles is $5)</li>
        <li>$15 per half hour
        </li>
    </div>

const tips =
    <div style={{ borderRadius: '6px', boxShadow: '0 10px 16px 0 rgb(0 0 0 / 24%)', padding: '25px' }}>
        <h2>Tips Appreciated!</h2>
        <li>Paypal, Cash app, cash only</li>
        <li>Paypal.me/brennajean88</li>
        <li>Cash app @brennajean88</li>
    </div>

const inquiry =
    <div style={{ borderRadius: '6px', boxShadow: '0 10px 16px 0 rgb(0 0 0 / 24%)', padding: '25px' }}>
        <h2>When inquiring, I need to know:</h2>
        <li>Is your animal vaccinated? </li>
        <li>Is your dog kennel trained? </li>
        <li>Do they get along well with cats/dogs? </li>
        <li>Do they walk well on a leash? </li>
        <li>What commands do they know and respond to? </li>
        <li>Can they have treats/bones/greenies etc?</li>
        <li>Does the animal have Medical needs?</li>
        <li>What is the animals food routine?</li>
        <li>What does the animal like best? (I.e. fetch or walks)</li>
        <li>Do you have an alarm system? (Please be advised I will not enter homes unless I have a key and code)</li>
    </div>

const dogwalking =
    <div style={{ borderRadius: '6px', boxShadow: '0 10px 16px 0 rgb(0 0 0 / 24%)', padding: '25px' }}>
        <h2>Dog Walking</h2>
        <li>Within 10 mile distance, every extra 5 miles is $5</li>
        <li>$15 per dog per half hour (please be advised, I charge a half hour minimum)
        </li>
        <li>2nd dog is $10 per half hour </li>
    </div>



const PetSittingPage = () => (
    <Layout>
        <Seo title="Petsitting" />
        <h1>Best Friends Pet Care</h1>

        <Default>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1.5fr", gridGap: 20, marginBottom: "2rem" }}>
                {petboarding}
                {kennelImage}
            </div>
        </Default>
        <Mobile>
            <div style={{ display: "grid", gridGap: 20, marginBottom: '2rem' }}>
                {kennelImage}
                {petboarding}
            </div>

        </Mobile>
        <Default>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1.5fr", gridGap: 20, marginBottom: "2rem" }}>
                {petsitting}
                {yardImage}
            </div>
        </Default>
        <Mobile>
            <div style={{ display: "grid", gridGap: 20, marginBottom: '2rem' }}>
                {yardImage}
                {petsitting}
            </div>
        </Mobile>

        <Default>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1.5fr", gridGap: 20, marginBottom: "2rem" }}>
                {dogwalking}
                {dogsBeachImage}
            </div>
        </Default>
        <Mobile>
            <div style={{ display: "grid", gridGap: 20, marginBottom: '2rem' }}>
                {dogsBeachImage}
                {dogwalking}
            </div>
        </Mobile>
        <Default>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1.5fr", gridGap: 20, marginBottom: "2rem" }}>
                {tips}
                {dogsdcImage}
            </div>
        </Default>
        <Mobile>
            <div style={{ display: "grid", gridGap: 20, marginBottom: '2rem' }}>
                {dogsdcImage}
                {tips}
            </div>
        </Mobile>
        <Default>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1.5fr", gridGap: 20, marginBottom: "2rem" }}>
                {inquiry}
                {puppyImage}
            </div>
        </Default>
        <Mobile>
            <div style={{ display: "grid", gridGap: 20, marginBottom: '2rem' }}>
                {puppyImage}
                {inquiry}
            </div>
        </Mobile>


    </Layout >
)

export default PetSittingPage

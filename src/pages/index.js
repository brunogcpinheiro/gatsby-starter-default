import React from "react"
import { FaDownload } from "react-icons/fa"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Who am I?" />
    <div
      style={{
        padding: "5rem",
        display: "flex",
        height: "calc(100vh - 120px)",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          flex: "2",
        }}
      >
        <p
          style={{
            color: "#fff",
          }}
        >
          Looking for a <strong>Developer</strong>?
        </p>
        <h1
          style={{
            fontSize: "4rem",
            color: "#ffb142",
            fontFamily: "'Poppins'",
          }}
        >
          I'm Bruno Carpinelli
        </h1>
        <p
          style={{
            maxWidth: "550px",
            color: "#fff",
          }}
        >
          A <strong>Web/Mobile</strong> developer since 2015. Experienced with
          all phases of the <strong>web/mobile</strong> development to create{" "}
          <strong style={{ color: "#ffb142" }}>awesome</strong> applications.
        </p>
        <div>
          <button className="btn">Hire me</button>
          <button className="btn">
            Download CV <FaDownload style={{ paddingTop: "3px" }} />
          </button>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          borderRadius: "30px/10px",
          flex: "1",
          padding: "1.5rem",
        }}
      >
        <Image
          style={{
            width: "100%",
            maxWidth: "350px",
          }}
        />
      </div>
    </div>
  </Layout>
)

export default IndexPage

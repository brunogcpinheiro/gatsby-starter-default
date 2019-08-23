import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FaTree, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa"

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <p style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <FaTree color="#ffb142" style={{ marginRight: "5px" }} />
          {siteTitle}
        </Link>
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
        }}
      >
        <ul
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            margin: "0",
            padding: "0",
          }}
        >
          <li className="list--item">
            <Link
              to="/"
              activeStyle={{
                color: "#ffb142",
              }}
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              Who am I?
            </Link>
          </li>
          <li className="list--item">
            <Link
              to="/who-am-i"
              activeStyle={{
                color: "#ffb142",
              }}
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              Tech knowledge
            </Link>
          </li>
          <li className="list--item">
            <Link
              to="/portfolio"
              activeStyle={{
                color: "#ffb142",
              }}
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              Portfolio
            </Link>
          </li>
        </ul>
      </div>
      <div
        style={{
          color: "#fff",
        }}
      >
        <ul
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "right",
            justifyContent: "right",
            margin: "0",
            padding: "0",
          }}
        >
          <li className="list--item" style={{ marginTop: "10px" }}>
            <FaGithub color="#ffb142" size="25" />
          </li>
          <li className="list--item" style={{ marginTop: "10px" }}>
            <FaTwitter color="#ffb142" size="25" />
          </li>
          <li className="list--item" style={{ marginTop: "10px" }}>
            <FaInstagram color="#ffb142" size="25" />
          </li>
        </ul>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Bruno Carpinelli`,
}

export default Header

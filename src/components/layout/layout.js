import React from "react"
import Navbar from "../navbar/navbar"
import CssBaseline from "@material-ui/core/CssBaseline"
import * as styles from "./styles.module.css" //global css import
import Footer from "../footer/Footer"

const Layout = ({ children }) => {
  return (
    <main>
      <Navbar />
      <CssBaseline />

      <div className={styles.container}>
        <div>{children}</div>
      </div>

      <Footer />
    </main>
  )
}

export default Layout

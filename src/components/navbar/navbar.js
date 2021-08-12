import { Container, Hidden } from "@material-ui/core"
import { Link } from "gatsby"
import React from "react"
import * as styles from "./styles.module.css"
import { StyledNav } from "./styles"
import MenuIcon from "@material-ui/icons/Menu"

const Navbar = () => {
  return (
    <StyledNav>
      <Container maxWidth="lg">
        <Link className={styles.brand} to="/">
          Simply Recipes
        </Link>

        <Hidden smDown>
          <Link
            activeClassName={styles.active}
            className={styles.link}
            to="/about"
          >
            About
          </Link>
          <Link
            activeClassName={styles.active}
            className={styles.link}
            to="/contact"
          >
            Contact
          </Link>
          <Link
            activeClassName={styles.active}
            className={styles.link}
            to="/tags"
          >
            Tags
          </Link>
          <Link
            activeClassName={styles.active}
            className={styles.link}
            to="/recipes"
          >
            Recipes
          </Link>
        </Hidden>

        <Hidden mdUp>
          <span
            style={{
              fontSize: "20px",
              display: "flex",
              alignItems: "center",
              marginTop: "4px",
            }}
            className={styles.icon}
          >
            <span style={{ marginRight: "7px" }}>Menu</span>
            <MenuIcon />
          </span>
        </Hidden>
      </Container>
    </StyledNav>
  )
}

export default Navbar

import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Dialog from "@material-ui/core/Dialog"

import Divider from "@material-ui/core/Divider"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import CloseIcon from "@material-ui/icons/Close"
import Slide from "@material-ui/core/Slide"
import * as styles from "./styles.module.css"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}))

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function FullScreenDialog({ open, handleClose }) {
  const classes = useStyles()

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar
          style={{ backgroundColor: "rgb(0, 102, 204)" }}
          className={classes.appBar}
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Menu
            </Typography>
          </Toolbar>
        </AppBar>

        <Link className={styles.brand} to="/">
          Simply Recipes
        </Link>

        <Divider />

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
      </Dialog>
    </div>
  )
}

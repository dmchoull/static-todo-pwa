import React from "react"
import styles from "../assets/stylesheets/home.pcss"
import logo from "../assets/images/logo.png"

const Home = () => (
  <div className={styles.app}>
    <header className={styles.appHeader}>
      <img src={logo} className={styles.appLogo} alt="logo" />
      <h1 data-testid="title" className={styles.appTitle}>Welcome to React-Static</h1>
    </header>
    <p className={styles.appIntro}>
      To get started, edit <code>src/components/Home.jsx</code> and save to reload.
    </p>
  </div>
)

export default Home

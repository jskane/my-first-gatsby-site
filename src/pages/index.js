import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Amplify from 'aws-amplify'
import config from '../aws-exports'
Amplify.configure(config)

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      <p>Create a new account: <Link to="/app/signup">Sign Up</Link></p>
      <Link to="/app/login">Sign In</Link><br />
      <Link to="/app/home">Home</Link><br />
      <Link to="/app/profile">Your profile</Link>
      />
    </Layout>
  )
}

export default IndexPage

import React from "react"
import "../components/main.css";

import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <p className="mainContent">
      Hi there,<br />
      I don't know how you reached here but sorry to disappoint you there isn't much going on at this site.<br />
      I bought the domain and wanted to do a lot of things but didn't find time for it.<br/>
      So until then, imagine a cool background, fancy animations and a blog with lots of technical jargon.<br />
      In the meantime if you want to reach me, here are the links:<br />
      <a href="https://github.com/chaitanya-deep" target="_blank" rel="noreferrer noopener">Github</a><br />
      <a href="https://www.linkedin.com/in/chdeep/" target="_blank" rel="noreferrer noopener">LinkedIn</a><br />
      <a href="https://twitter.com/seadeep24" target="_blank" rel="noreferrer noopener">Twitter</a>

      <br /><br />
      And this is the thing I'm busy with these days:<br />
      <a href="https://www.euclidxr.com/">Euclid</a>
    </p>
  </>
)

export default IndexPage

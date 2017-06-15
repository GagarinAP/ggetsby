import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import 'css/css/bootstrap.min.css'
import 'css/markdown-styles.css'
import Helmet from 'react-helmet'
import { config } from 'config'

export default class Markdown extends React.Component {
  static propTypes = {
    router: PropTypes.object,
  }

  render() {
    const post = this.props.route.page.data
    return (
      <div className="container text-center">
        <Helmet title={`${config.siteTitle} | ${post.title}`} />
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
        <Link to={prefixLink('/')}>Go back to the homepage</Link>
      </div>
    )
  }
}

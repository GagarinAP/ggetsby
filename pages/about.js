import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import about from './image/about.jpg'
import { config } from 'config'

export default class Index extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="panel" style={{backgroundImage: `url(${about})`,resizeMode: 'cover', height:'350px'}}>
                    <h1>
                        Hi people
                    </h1>
                    <p>Welcome to page 2</p>
                    <Link to={prefixLink('/')}>Go back to the homepage</Link>
                </div>
            </div>
        )
    }
}

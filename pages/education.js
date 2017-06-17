import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import edu from 'pages/image/edu.jpg'
import { config } from 'config'

export default class Index extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="panel" style={{backgroundImage: `url(${edu})`,resizeMode: 'cover', height:'350px'}}>
          <h1 className="head-page">Education page here</h1>
          <p className="head-page">Welcome to education page</p>
          <Link className="btn btn-lg btn-default" to={prefixLink('/')}>Go back to the homepage</Link>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="panel-group">
              <div className="panel panel-success">
                <div className="panel-heading">
                  <h4><strong>2016: </strong>Massachusetts Institute of Technology</h4>
                </div>
                <div className="panel-body">
                  <h5><strong>Cambridge, Massachusetts</strong></h5>
                  <p>In addition to being the top engineering school overall, MIT boasts No. 1-ranked programs for
                      chemical, aerospace/aeronautical, computer, and electrical engineering, according to US News. Upon
                      graduation, 32% of students head on to graduate school while 57% enter the workforce. Students are
                      courted by nearly 250 companies; top employers for MIT grads include Google, Amazon, ExxonMobil,
                      and Goldman Sachs.</p>
                </div>
              </div>
              <div className="panel panel-success">
                <div className="panel-heading">
                              <h4><strong>2015: </strong>California Institute of Technology</h4>
                </div>
                <div className="panel-body">
                  <h5><strong>Pasadena, California</strong></h5>
                  <p>At Caltech, students take a practical approach to learning to "expand human knowledge and benefit
                      society." There are seven areas of study to choose from, ranging from aerospace to medical
                      engineering. The school's engineering department is also pretty diverse — over a third of
                      students are women. The average starting salary for 2013 Caltech grads was $82,000.</p>
                </div>
              </div>
              <div className="panel panel-success">
                <div className="panel-heading">
                              <h4><strong>2013: </strong>Stanford University</h4>
                </div>
                <div className="panel-body">
                  <h5><strong>Stanford, California</strong></h5>
                  <p>Stanford students take can advantage of opportunities to study and work abroad through the school's
                      Global Engineering Programs, which provides students with internships in China, Uganda, Japan,
                      Brazil, and more. US News ranks Stanford as the No. 2 engineering school in the country, with its
                      computer, mechanical, and electrical programs taking the No. 2 spots in their respective fields as
                      well.</p>
                </div>
              </div>
              <div className="panel panel-success">
                <div className="panel-heading">
                              <h4><strong>2011: </strong>Carnegie Mellon University</h4>
                </div>
                <div className="panel-body">
                  <h5><strong>Pittsburgh, Pennsylvania</strong></h5>
                  <p>Graduates can expect competitive compensation with a degree from Carnegie Mellon. For the class of
                      2013, the median starting salaries ranged from $60,000 for civil and environmental engineers to
                      $90,000 for electric and computer engineers. Partnerships with major companies like IBM, Google,
                      and General Motors also allow students to gain hands-on experience in their fields.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

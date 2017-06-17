import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import about from './image/about.jpg'
import logo from './image/logo.jpg'
import { config } from 'config'

export default class Index extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="panel" style={{backgroundImage: `url(${about})`,resizeMode: 'cover', height:'350px'}}>
          <h1 className="head-page">About page here</h1>
          <p className="head-page">Welcome to about me</p>
          <Link className="btn btn-lg btn-default" to={prefixLink('/')}>Go back to the homepage</Link>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="panel panel-success">
              <div className="panel-body">
                <div className="row">
                  <div className="col-md-12 col-sm-6 col-xs-6">
                    <img className="img-rounded" src={logo} alt="John"/>
                  </div>
                  <div className="col-md-12 col-sm-6 col-xs-6 text-center">
                    <h1>John Doe</h1>
                    <h3 className="title">Front-end web developer</h3>
                    <h3>Harvard University</h3>
                    <div className="link">
                      <ul className="list-inline">
                        <li><Link to={prefixLink('/')}><i className="fa fa-2x fa-dribbble"/></Link></li>
                        <li><Link to={prefixLink('/')}><i className="fa fa-2x fa-twitter"/></Link></li>
                        <li><Link to={prefixLink('/')}><i className="fa fa-2x fa-linkedin"/></Link></li>
                        <li><Link to={prefixLink('/')}><i className="fa fa-2x fa-facebook"/></Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="panel panel-success">
              <div className="panel-body">
                <h3 className="text-center">About me</h3>
                <blockquote>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                  <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
                </blockquote>
                <p>They say that if you want something to be done well, do it yourself. So I follow this wise saying and
                    would like to introduce myself. I believe that it isn't an easy thing to speak about yourself as
                    it's hard to have a look at yourself from aside but at the same time who knows you better than you
                    yourself do?</p>
                <p>My name is Elena. I live in Gomel. My family is an average sized Belarusian family: it consists of my
                    father, mother, elder brother and me. As for my appearance I am a slim girl, a bit shortish, but it
                    does not mind me. I have a blunt nose, blue expressive eyes and chestnut shoulder length hair. My
                    friends think I am rather attractive girl, but I have never thought I am a beauty. As far as
                    preferences in clothes are concerned I should say that I'm rather moody person that's why I cannot
                    say I have one favourite style. Today I can wear a skirt, formal blouse and high-heeled shoes, but
                    tomorrow I can prefer tight-fitting jeans, casual T-shirt and low-heeled shoes. Everything depends
                    on my mood.</p>
                <p>To my mind our life goes so fast that sometimes we don't notice how fleeting it is. For instance I
                    didn't notice how eighteen years of my life have passed. I feel like it was yesterday when I went to
                    school for the first time, but this year is the last one at school. It's unbelievable but it is
                    true. But I want to tell you everything in details.</p>
                <p>My early years, which I remember only by parts, were interesting and careless. My childhood was happy
                    because my parents devoted me a lot of time, my brother played with me and read books for me in the
                    evenings. So I can say I was surrounded with love, care and attention. As most children I was sent
                    to the kindergarten at the age of three as both of my parents worked, but as far as I remember I
                    didn't like to attend kindergarten. I'm sure I can never forget my governor who made me eat
                    semolina. In general the attendance of kindergarten seemed boring to me, though mainly there I met
                    my first loyal friend.</p>
                <p>When I was seven I went to school. My first school years were spent at school number 32, but then I
                    moved to an English Specialized school number 71, where I got a proper education especially in such
                    subjects as English, History and Geography.</p>
                <p>School meant very much to me and I'm sure that it gave me a lot; first of all of course in
                    educational sphere. Thanks to school and my teachers I became more intelligent and educated person.
                    I consider that I became more persistent, determined and ambitious. Diligence, attention and
                    accuracy - all these qualities school developed in me regularly. And owing to school I got
                    acquainted with interesting people, devoted friends and excellent teachers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

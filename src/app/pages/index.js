import React from 'react'
import App from '../components/App'
import Item from '../components/Item'
import { featuredArticles } from '../data.js'

export default () => (
  <App>
    <div className='wrapper'>
      <div className='header' style={{ position: 'relative' }}>
        <div className='icons' style={{ right: '20px', position: 'absolute', top: '20px' }}>
          <a href="https://github.com/tuguScript" target="_blank"><i style={{textDecoration: 'inherit', color: 'inherit'}} className='icon1 fab fa-github'></i></a>
          <a href="https://twitter.com/tuguldur_01" target="_blank"><i className='icon2 fab fa-twitter'></i></a>
          <a href="https://www.linkedin.com/in/tuguldurtech/" target="_blank"><i className='icon3 fab fa-linkedin'></i></a>
          <a href="mailto:tuguscript@gmail.com?Subject=Hello" target="_blank"><i className='icon4 fa fa-envelope'></i></a>
        </div>
        <div className='emoji'>
          ✌️
        </div>
        <h1 className='h1'>Hi I'm Tugi</h1>
        <h3 className='h3'>I’m an SF-based engineer & designer.</h3>
      </div>
      <div className='body' style={{ padding: '0px 80px' }}>
        <h1>Projects</h1>
        {featuredArticles.map((featuredArticle, i) => {
          return <Item
            title={featuredArticle.title}
            description={featuredArticle.description}
            id={featuredArticle.id}
            key={featuredArticle.id}
            link={featuredArticle.link}
            newTab={featuredArticle.link ? true : false} />
        })}
      </div>
    </div>
    <style jsx global>
      {`
      .icon1 {
        width:60px
        height:60px
        font-size:1.5em
        line-height:60px
        margin-right:15px
      }
      .icon2 {
        width:60px
        height:60px
        font-size:1.5em
        line-height:60px
        margin-right:15px
      }
      .icon3 {
        width:60px
        height:60px
        font-size:1.5em
        line-height:60px
        margin-right:15px
      }
      .icon4 {
        width:60px
        height:60px
        font-size:1.5em
        line-height:60px
        margin-right:15px
      }
      .h1 {
        height: 35px
        color: #000000
        font-family: Roboto
        font-size: 30px
        font-weight: 500
        line-height: 35px
      }
      .h3 {
        height: 21px
        width: 289px
        color: #000000
        font-family: Roboto
        font-size: 18px
        font-weight: 300
        line-height: 21px
      }
      .wrapper {
        margin: 0 auto
        height: 983px
        width: 864px
        border-radius: 10px
        background-color: #FFFFFF
        box-shadow: 0 0 100px 0 rgba(175,175,175,0.5)
      }
      .header {
        height: 208px
        padding: 40px 80px
        border-radius: 10px
        background-color: #FAFAFA
      }
      .emoji {
        height: 63px
        width: 48px
        color: #FFFFFF
        font-size: 48px
        line-height: 63px
      }
    `}
    </style>
  </App>
)

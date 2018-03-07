import React from 'react'
import Link from 'next/link'

class Item extends React.Component {
  state = {}
  componentDidMount() {
    console.log(typeof this.props.link);
    
  }
  render() {
    const props = this.props
    let link = props.newTab

    return (
      <Link
        // as={`/p/${props.id}`} 
        href={typeof this.props.link !== 'undefined' ? `${props.link}` : `/post?title=${props.title}&id=${props.id}`}
      >
      <a target="_blank" style={{ textDecoration: 'inherit' }}>
        <div className='item'>
          <h1 className='h1'>{props.title}</h1>
          {props.description.map((item) => {
            return <span className='badge'>{item}</span>
          })}

          <style jsx>
            {`
              .item {
                  border: 1px solid white
                  border-radius: 25px;
                  padding: 10px 20px
                  transition: border 0.5s;
                  cursor: pointer
              }
              .item:hover {
                  border: 1px solid black
              }
              .badge {
                padding: 1px 9px 2px;
                font-size: 12.025px;
                font-weight: bold;
                white-space: nowrap;
                color: #ffffff;
                background-color: #999999;
                -webkit-border-radius: 9px;
                -moz-border-radius: 9px;
                border-radius: 9px;
              }
              .badge:hover {
                color: #ffffff;
                text-decoration: none;
                cursor: pointer;
              }
              `}
          </style>
        </div>
        </a>
      </Link>
    )
  }
}

export default Item;
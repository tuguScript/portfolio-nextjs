import React from 'react'
import Link from 'next/link'

class Item extends React.Component {
  state = {}
  componentDidMount() {
    console.log(this.props.link);

  }
  render() {
    const props = this.props
    let link = props.newTab
    if (!link) {
      return (
        <Link
          // as={`/p/${props.id}`} 
          href={`/post?title=${props.title}&id=${props.id}`}
        >
          <div className='item'>
            <h1 className='h1'>{props.title}</h1>
            <h3 className='h3'>{props.description}</h3>
            <style jsx>
              {`
              .item {
                  border: 1px solid white
                  padding: 0px 20px
                  transition: border 0.5s;
                  cursor: pointer
              }
              .item:hover {
                  border: 1px solid black
              }
              `}
            </style>
          </div>
        </Link>
      )
    } else {
      return (
        <Link
          // as={`/p/${props.id}`} 
          href={props.link}
          
        >
          <a target="_blank" style={{textDecoration: 'inherit'}}>
            <div className='item'>
              <h1 className='h1'>{props.title}</h1>
              <h3 className='h3'>{props.description}</h3>
              <style jsx>
                {`
              .item {
                  border: 1px solid white
                  padding: 0px 20px
                  transition: border 0.5s;
                  cursor: pointer
              }
              .item:hover {
                  border: 1px solid black
              }
              `}
              </style>
            </div>
          </a>
        </Link>
      )
    }
  }
}

export default Item;

// const Item = (props) => (

// )

import React, {Component} from 'react'

export default class Display extends Component {
  render () {
    const {data} = this.props
    return <div className={'display'} >{data}</div>

  }
}

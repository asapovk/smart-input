import React, {Component} from 'react'

export default class Input extends Component {
  render () {
    const {value, placeholder, size} = this.props

    return <input className={'input'}
                  type="text"
                  value={value}
                  placeholder={placeholder}
                  onChange={this.props.onChange}
                  />

  }
}

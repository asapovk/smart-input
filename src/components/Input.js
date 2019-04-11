import React, {Component} from 'react'
import classNames from 'classnames';


export default class Input extends Component {

  constructor (props){
    super(props)
    this.input = null
  }

  checkSize = (className, size) => {
    if (className === size) return true
    else return false
  }

  componentDidMount () {
    //this.input.addEventListener('mouseenter', this.props.onHover)
    //this.input.addEventListener('click', this.props.onFocus)
  }


  render () {
    const {value, placeholder, size, state} = this.props
    return <div className={classNames('inputBox',
                          {'error': state.error,
                          'focus': state.focus,
                          'hover': state.hover,
                          'small': this.checkSize('small', size),
                          'large': this.checkSize('large', size),
                          'middle': this.checkSize('middle', size)})}>
                      <input className='input'
                        type="text"
                        placeholder={placeholder}
                        onChange={this.props.onChange}
                        onFocus={this.props.onFocus}
                        onBlur={this.props.onBlur}
                        onMouseEnter={this.props.onHover}
                        onMouseLeave={this.props.onOut}
                        value={this.props.text}
                        />
                        <span className={'icon'}>{this.props.icon}</span>
              </div>
  }
}

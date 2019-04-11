import React, {Component} from 'react'
import Display from './Display'
import Input from './Input'
import classNames from 'classnames';

export default class Front extends Component {


  state = {
    hover: false,
    focus: false,
    blur: false,
    error: false,
    text: ''
  }
  handleOut = () => {
    this.setState({hover: false})
    console.log('outed!')
  }

  handleHover = () => {
    this.setState({hover: true})
    console.log('hovered!')
  }

  handleFocus = () => {
    this.setState({focus: true, hover: false, blur: false})
    console.log('focused!')
  }

  checkError = () => {
    const {text} = this.state
    if(text === '') {
      this.setState({error: true})
    }
    else this.setState({error: false})
  }

  handleBlur = () => {
    this.setState({focus: false, blur: true})
    console.log('blured!')
    this.checkError()
  }

  handleChange = (name) => (e) => {
    this.setState({[name]: e.target.value})
    console.log('onChange')
  }

  render() {
    return <div className={'container'}>
              <div className={'inputContainer'}>
                <Input  onHover={this.handleHover}
                        onFocus={this.handleFocus}
                        value={this.state.text}
                        onChange={this.handleChange('text')}
                        onBlur={this.handleBlur}
                        onOut={this.handleOut}
                        state={this.state}
                        size={'large'}
                        icon={<i class="fab fa-angellist"></i>}
                        />
              </div>
              <div className={'displayContainer'}>
                <Display data={this.state}/>
              </div>
            </div>
  }
}

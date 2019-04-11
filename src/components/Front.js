import React, {Component} from 'react'
import Display from './Display'
import Input from './Input'

export default class Front extends Component {
  render() {
    return <div className={'container'}>
              <div className={'inputContainer'}>
                <Input/>
              </div>
              <div className={'displayContainer'}>
                <Display data={'Hello world'}/>
              </div>
            </div>
  }
}

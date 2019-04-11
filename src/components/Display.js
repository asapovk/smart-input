import React, {Component} from 'react'

export default class Display extends Component {
  render () {
    const {data} = this.props
    const fields = Object.keys(data).map(field=> {
      return <div key={field}>{field+' : '+data[field]}</div>
    })
    return <div className={'display'} >
            {fields}
          </div>

  }
}

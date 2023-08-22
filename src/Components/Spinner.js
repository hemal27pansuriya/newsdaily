import React, { Component } from 'react'
import loader from './ZZ5H.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loader} alt="Loader" />
      </div>
    )
  }
}

export default Spinner

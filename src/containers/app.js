import React, { Component, PropTypes } from 'react'
import SpellList from '../components/Spells/SpellList'

export default class App extends Component {
  render () {
    return (
      <div className='App'>
        <SpellList />
      </div>
    )
  }
}

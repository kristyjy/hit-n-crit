import React, { PropTypes, Component } from 'react'

export default class Spell extends Component {
  static propTypes = {
    spell: PropTypes.object,
    id: PropTypes.string
  }

  render(){
    const {spell, id} = this.props

    return (
      <li className="spell">
        {spell.name}
      </li>
    )
  }
}

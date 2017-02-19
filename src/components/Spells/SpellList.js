import React, { Component, PropTypes } from 'react'
import Spell from './Spell'

// redux/firebase
import { connect } from 'react-redux'
import { firebaseConnect, helpers } from 'react-redux-firebase'
const { isLoaded, isEmpty, pathToJS, dataToJS } = helpers

class SpellList extends Component {
  static propTypes = {
    spells: PropTypes.array,
    firebase: PropTypes.shape({
      push: PropTypes.func.isRequired
    })
  }

  render () {
    const { spells } = this.props

    const spellList = (!isLoaded(spells))
                        ? 'Loading...'
                        : (isEmpty(spells))
                          ? 'No spells found'
                          : Object.keys(spells).map((key) => (
                            <Spell key={key} id={key} spell={spells[key]} />
                          ))
    return (
      <ul className='spell-list'>
        {spellList}
      </ul>
    )
  }
}

const fbWrappedComponent = firebaseConnect([
  { type: 'once', path: 'spells', populates: [{ child: 'collaborators', root: 'users' }] }
])(SpellList)

export default connect(
  ({ firebase }) => ({
    spells: dataToJS(firebase, 'spells'),
    profile: pathToJS(firebase, 'profile'),
    auth: pathToJS(firebase, 'auth')
  })
)(fbWrappedComponent)

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

  constructor() {
    super();
    // Load all in default state
    this.state = {
      search: ''
    }
  }

  updateSearch(e) {
    this.setState({ search: e.target.value });
  }

  render () {
    const { spells } = this.props
    const { search } = this.state

    const spellList = (!isLoaded(spells))
                        ? 'Loading...'
                        : (isEmpty(spells))
                          ? 'No spells found'
                          : spells
                            .filter(spell => spell.name.toLowerCase().indexOf(search.toLowerCase()) > -1)
                            .map((spell, key) => <Spell key={key} spell={spell} />)
    return (
      <div>
        <input type="text" onChange={(e) => this.updateSearch(e) } />
        <ul className='spell-list'>
          {spellList}
        </ul>
      </div>
    )
  }
}

const fbWrappedComponent = firebaseConnect([{
  path: 'spells',
  populates: [{ child: 'collaborators', root: 'users' }]
}])(SpellList)

export default connect(
  ({ firebase }) => ({
    spells: dataToJS(firebase, 'spells'),
    profile: pathToJS(firebase, 'profile'),
    auth: pathToJS(firebase, 'auth')
  })
)(fbWrappedComponent)

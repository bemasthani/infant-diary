import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class ListInfants extends Component {
  static propTypes = {
    infants: PropTypes.array.isRequired,
    onDeleteInfant: PropTypes.func.isRequired
  }

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({
      query: query.trim()
    })
  }
  clearQuery=(query) => {
    this.setState({
      query: ''
    })
  }

  render() {
    const {infants, onDeleteInfant} = this.props
    const {query} = this.state
    let showinginfants
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      showinginfants = infants.filter((infant) => match.test(infant.name))
    } else {
      showinginfants = infants
    }
    showinginfants.sort(sortBy('name'))
    return (
      <div className='list-infants'>
        <div className='list-infants-top'>
          <input
            className='search-infants'
            type='text'
            placeholder='Search infants'
            value={query}
            onChange={(event) => this.updateQuery(event.target.value)}
          />
          <Link
            to='/create'
            className='add-infant'
          >Add infant</Link>
        </div>
        {showinginfants.length !== infants.length && (
          <div className='showing-infants'>
            <span>Now showing {showinginfants.length} of {infants.length} total</span>
            <button onClick={this.clearQuery}>Show All</button>
          </div>
        )}
        <ol className='infant-list'>
          {showinginfants.map((infant) => (
            <li key={infant.id} className='infant-list-item'>
              <div className='infant-avatar' style={{
          backgroundImage: `url(${infant.avatarURL})`
              }}/>
              <div className='infant-details'>
                <p>{infant.name}</p>
                <p>{infant.dob}</p>
              </div>
              <button onClick={() => onDeleteInfant(infant)} className='infant-remove'>
                Remove
              </button>
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

export default ListInfants

import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import ListInfants from './components/ListInfants'
import CreateInfant from './components/CreateInfant'
import ContactsAPI from './utils/ContactsAPI'

import './index.css';

class App extends Component {
  state = {
    infants: []
  }
  componentDidMount() {
    ContactsAPI.getAll().then((infants) => {
      this.setState({
        infants
      })
    })
  }
    removeInfant = (infant) => {
    this.setState((state) => ({
      infants: state.infants.filter((c) => c.id !== infant.id)
    }))
    ContactsAPI.remove(infant)
  }
    createInfant(infant) {
    ContactsAPI.create(infant).then(infant => {
      this.setState(state => ({
        infants: state.infants.concat([infant])
      }))
    })
  }
  render() {
    return (
      <div className="App">
      <Route exact path='/' render={() => (
        <ListInfants
          onDeleteInfant={this.removeInfant}
         infants={this.state.infants}
          />
        )}/>
        <Route path='/create' render={({history}) => (
            <CreateInfant
              onCreateInfant={(infant) => {
                this.createInfant(infant)
                history.push('/')
              }}
            />
          )}/>
      </div>
    );
  }
}

export default App;

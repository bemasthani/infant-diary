import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ImageInput from './ImageInput'
import serializeForm from 'form-serialize'
//import PropTypes from 'prop-types'


class CreateInfant extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    const values = serializeForm(e.target, {
      hash: true
    })
    if (this.props.onCreateInfant)
      this.props.onCreateInfant(values)
  }

  render() {
    return (
      <div >
          <Link className='close-create-infant' to='/'>Close</Link>
         <form onSubmit={this.handleSubmit} className='create-infant-form'>
            <ImageInput
      className='create-infant-avatar-input'
      name='avatarURL'
      maxHeight={64}
      />
           <div className='create-infant-details'>
             <input type='text' name='name' placeholder='Name'/>
             <input type='date' name='dob' placeholder='DOB'/>
             <button>Add Infant</button>
           </div>
         </form>
       </div>
    )
  }
}

export default CreateInfant

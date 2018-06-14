import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Title } from 'bloomer'
import firebase from '../firebase'

var database = firebase.database()

class AddCategory extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      categoryId: '',
      categoryTitle: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit (categoryId, categoryTitle) {
    database.ref('categories/').set({
      id: this.state.categoryId,
      title: this.state.categoryTitle
    })
  }

  // Example from docs for setting data
  // function writeUserData(userId, name, email, imageUrl) {
  //   firebase.database().ref('users/' + userId).set({
  //     username: name,
  //     email: email,
  //     profile_picture : imageUrl
  //   });
  // }

  handleChange (event) {
    event.preventDefault()
    const name = event.target.name
    const value = event.target.value
    this.setState({[name]: value})
  }
  render () {
    return (
      <div className='fullcenter'>
        <h2 className='header'>Add A Category</h2>
        <form className='addCategoryForm' onSubmit={this.handleSubmit} >
            Category ID: <input type='text' name='categoryId' onChange={this.handleChange} />
            Category Name: <textarea className='content-textarea' type='text' name='categoryName' onChange={this.handleChange} />
          <button className='submitButton' type='submit'>Submit</button>
          <button className='cancelButton' type='button' onClick={this.props.history.goBack}>Cancel</button>
        </form>
      </div>
    )
  }
}

export default AddCategory

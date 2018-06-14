import React from 'react'
import CategoryList from './CategoryList'
import Loader from './Loader'
import Database from '../Database'
import { Link } from 'react-router-dom'

class CategoryListContainer extends React.Component {
  constructor () {
    super()

    this.state = {
      loaded: false,
      categories: []
    }

    this.db = new Database()
  }

  componentDidMount () {
    this.db.getCategories()
      .then(categories => {
        this.setState({
          loaded: true,
          categories: categories
        })
      })
  }

  render () {
    return <Loader loaded={this.state.loaded}>
      <div>
        {<Link to='/add'><button className='button add-category'>Add Category</button></Link>}
      </div>
      <CategoryList categories={this.state.categories} {...this.props} />
    </Loader>
  }
}

export default CategoryListContainer

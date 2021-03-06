import React from 'react'
import {connect} from 'react-redux'
import {categoryCreate} from '../../actions/category-actions'
import CategoryForm from '../category/category-form/category-form'
import CategoryItem from '../category/category-item/category-item'
import './dashboard.scss';
import FancyButton from '../../lib/fancy-button'


class Dashboard extends React.Component {
  render() {
    return (
      <section>
        <h1>Welcome to my</h1>
        <FancyButton />

        <CategoryForm
          buttonText='create'
          onComplete={this.props.dashboardCategoryCreate}/>

        {this.props.categories ?
          this.props.categories.map(cat =>
             <CategoryItem key={cat._id} category={cat} />)
          :
          undefined
        }
      </section>
    )
  }
}

const mapStateToProps = state => ({
  categories: state
})

const mapDispatchToProps = (dispatch, getState) => ({
  dashboardCategoryCreate: category => dispatch(categoryCreate(category)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
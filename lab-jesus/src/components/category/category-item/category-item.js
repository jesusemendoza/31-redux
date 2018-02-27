import React from 'react';
import CreateForm from '../category-form/category-form'
import { connect } from 'react-redux';
import {renderIf} from '../../../lib/utils';
import CategoryForm from '../category-form/category-form';
import {categoryUpdate, categoryDelete} from '../../../actions/category-actions'

class CategoryItem extends React.Component{
  constructor(props){
    super(props)
    console.log('category props',this.props.category)
    this.state = this.props.category
    this.state.edit = false;
    this.handleDelete = this.handleDelete.bind(this)
  }
  handleDelete(){
    this.props.dashboardCategoryDelete(this.state)
  }
  render(){
    return(
          <div key={this.props.category._id} className='budget-div' onDoubleClick={() => this.setState({edit: !this.state.edit})}>
            <h3>{this.props.category.name}</h3>
            <a>{this.props.category.budget}</a>
            <button id={this.props.category._id}
             onClick={this.handleDelete}
            >Delete</button>
            {renderIf(this.state.edit,
            <CategoryForm category={this.props.category}
            buttonText='update'
            onComplete={this.props.dashboardCategoryUpdate}/>
            )}
          </div>
    )
  }
}

const mapStateToProps = state => ({
  categories : state,
})

const mapDispatchToProps = (dispatch, getState) => ({
  dashboardCategoryUpdate: category => dispatch(categoryUpdate(category)),
  dashboardCategoryDelete: category => dispatch(categoryDelete(category))

})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem)
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

export class CoursesPage extends Component {
  state = {
    course: {
      title: ''
    }
  };
  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({
      course
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.actions.createCourse(this.state.course);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type='text'
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type='submit' value='Save' />
        {this.props.courses.map((course) => (
          <div id='course.title'>{course.title}</div>
        ))}
      </form>
    );
  }
}
CoursesPage.propTypes = {
  actions: PropTypes.object.isRequired
};
function mapStateToProps(state) {
  return {
    courses: state.courses
  };
}
// !third way of dispatching actions
function mapDispatchToProps(dispatch) {
  return {
    //! createCourse: (course) => dispatch(courseActions.createCourse(course)) //Manual way of updating
    actions: bindActionCreators(courseActions, dispatch)
  };
}
// !object form of dispatching actions (automatically dispatched by connect)
// const mapDispatchToProps = {
//   createCourse: courseActions.createCourse
// };
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

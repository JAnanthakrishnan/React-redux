import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import * as authorActions from '../../redux/actions/authorActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import CourseList from './CourseList';

export class CoursesPage extends Component {
  componentDidMount() {
    const { courses, authors, actions } = this.props;
    if (courses.length === 0) {
      actions.loadCourses().catch((error) => {
        alert('Fetching courses failes' + error);
      });
    }
    if (authors.length === 0) {
      actions.loadAuthors().catch((error) => {
        alert('Fetching authors failed' + error);
      });
    }
  }

  render() {
    return (
      <>
        <h2>Courses</h2>
        <CourseList courses={this.props.courses} />
      </>
    );
  }
}
CoursesPage.propTypes = {
  actions: PropTypes.object.isRequired
};
function mapStateToProps(state) {
  return {
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map((course) => {
            return {
              ...course,
              authorName: state.authors.find(
                (author) => author.id === course.authorId
              ).name
            };
          }),
    authors: state.authors
  };
}
// !third way of dispatching actions
function mapDispatchToProps(dispatch) {
  return {
    //! createCourse: (course) => dispatch(courseActions.createCourse(course)) //Manual way of updating
    // actions: bindActionCreators(courseActions, dispatch)
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch)
    }
  };
}
// !object form of dispatching actions (automatically dispatched by connect)
// const mapDispatchToProps = {
//   createCourse: courseActions.createCourse
// };
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

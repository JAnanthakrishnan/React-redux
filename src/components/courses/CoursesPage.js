import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import * as authorActions from '../../redux/actions/authorActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import CourseList from './CourseList';
import { Redirect } from 'react-router-dom';

export class CoursesPage extends Component {
  state = {
    redirectToAddCoursePage: false
  };
  componentDidMount() {
    const { courses, authors, actions } = this.props;
    if (authors.length === 0) {
      console.log('we are here');
      actions.loadAuthors().catch((error) => {
        console.error(error);
        alert('Fetching authors failed' + error);
      });
    }
    if (courses.length === 0) {
      actions.loadCourses().catch((error) => {
        alert('Fetching courses failes' + error);
      });
    }
  }

  render() {
    return (
      <>
        {this.state.redirectToAddCoursePage && <Redirect to='/course' />}
        <h2>Courses</h2>
        <button
          style={{ marginBottom: '20px' }}
          className='btn btn-primary add-course'
          onClick={() => this.setState({ redirectToAddCoursePage: true })}
        >
          Add Course
        </button>
        <CourseList courses={this.props.courses} />
      </>
    );
  }
}
CoursesPage.propTypes = {
  actions: PropTypes.object.isRequired
};
function mapStateToProps(state) {
  // function getAuthorName(authors, course) {
  //   for (let i = 0; i < authors.length; i++) {
  //     if (authors[i].id == course.authorId) {
  //       console.log(authors[i].name);
  //       return authors[i].name;
  //     } else console.log(course.authorId === authors[2].id);
  //     return authors[2].name;
  //   }
  // }
  return {
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map((course) => {
            return {
              ...course,
              authorName: state.authors.find((a) => a.id === course.authorId)
                .name
            };
          }),
    // courses: state.courses,
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

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import * as authorActions from '../../redux/actions/authorActions';
import PropTypes from 'prop-types';

class ManageCoursePage extends Component {
  componentDidMount() {
    const { courses, authors, loadAuthors, loadCourses } = this.props;
    if (courses.length === 0) {
      loadCourses().catch((error) => {
        alert('Fetching courses failes' + error);
      });
    }
    if (authors.length === 0) {
      loadAuthors().catch((error) => {
        alert('Fetching authors failed' + error);
      });
    }
  }
  render() {
    return (
      <>
        <h2>Manage Course</h2>
      </>
    );
  }
}
ManageCoursePage.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadActions: PropTypes.func.isRequired
};
function mapStateToProps(state) {
  return {
    courses: state.courses,
    authors: state.authors
  };
}
const mapDispatchToProps = {
  laodCourses: courseActions.loadCourses,
  loadAuthors: authorActions.laodAuthors
};
export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);

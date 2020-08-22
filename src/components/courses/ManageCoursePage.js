import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import * as authorActions from '../../redux/actions/authorActions';
import PropTypes from 'prop-types';

function ManageCoursePage({ courses, authors, loadAuthors, loadCourses }) {
  useEffect(() => {
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
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <h2>Manage Course</h2>
    </>
  );
}
ManageCoursePage.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired
};
function mapStateToProps(state) {
  return {
    courses: state.courses,
    authors: state.authors
  };
}
const mapDispatchToProps = {
  loadCourses: courseActions.loadCourses,
  loadAuthors: authorActions.loadAuthors
};
export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);

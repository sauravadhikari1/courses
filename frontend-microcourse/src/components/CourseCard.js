import React from "react";
import { Link } from "react-router-dom";
// import "../home.css"
function CourseCard({ course }) {
  return (
    <li className="course-card">
      <img src={course.image} alt={course.title} className="course-image" />
      <h2 className="course-title">{course.title}</h2>
      <p className="course-description">{course.description}</p>
      <p className="course-duration">Duration: {course.duration}</p>
      <Link to={`/courses/${course._id}`} className="course-link">
        View Details
      </Link>
    </li>
  );
}

export default CourseCard;

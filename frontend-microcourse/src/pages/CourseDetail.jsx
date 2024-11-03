import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCourseById } from "../services/api";
import "../detail.css";

function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [animateImage, setAnimateImage] = useState(false);
  const [showForm, setShowForm] = useState(false); // State for showing the form

  useEffect(() => {
    getCourseById(id).then((data) => {
      setCourse(data);
      setAnimateImage(true); 
    });
  }, [id]);

  const handleEnrollClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div className="contain">
      <div className="course-detail-wrapper">
        <h1 className="course-detail-title">{course.title}</h1>
        <img
          src={course.image}
          alt={course.title}
          className={`course-detail-image ${animateImage ? "animate" : ""}`}
        />
        <p className="course-detail-description">{course.description}</p>
        <p className="course-detail-instructor">Instructor: {course.instructor}</p>
        <p className="course-detail-duration">Duration: {course.duration}</p>
        <button className="course-detail-enroll-button" onClick={handleEnrollClick}>
          Enroll Now
        </button>
      </div>

      {showForm && (
        <div className="course-detail-modal-overlay">
          <div className="course-detail-enrollment-form">
            <h2>Enroll in {course.title}</h2>
            <form>
              <label>
                Full Name:
                <input type="text" name="fullName" required />
              </label>
              <label>
                Email:
                <input type="email" name="email" required />
              </label>
              <label>
                Instructor:
                <input type="text" name="instructor" value={course.instructor} readOnly />
              </label>
              <label>
                Duration:
                <input type="text" name="duration" value={course.duration} readOnly />
              </label>
              <button type="submit" className="course-detail-submit-button">Submit</button>
              <button type="button" className="course-detail-close-button" onClick={handleCloseForm}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default CourseDetail;

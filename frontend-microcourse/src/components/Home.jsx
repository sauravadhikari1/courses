import React, { useState, useEffect } from "react";
import { getCourses } from "../services/api";
import CourseCard from "./CourseCard";
import "../home.css";

function Home() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then((data) => {
      setCourses(data);
    });
  }, []);

  return (
    <div className="home">
      <h1>Courses</h1>
      <ul className="course-list">
        {courses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </ul>
    </div>
  );
}

export default Home;


import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    instructor: { type: String, required: true },
    duration: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
});

const Course = mongoose.model('Course', CourseSchema);
export default Course;
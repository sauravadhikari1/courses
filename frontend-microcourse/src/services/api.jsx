import axios from "axios";


const API_URL = "http://localhost:8000/courses";

export function getCourses() {
  return axios.get(API_URL).then((response) => response.data);
}

export function getCourseById(id) {
  return axios.get(`${API_URL}/${id}`).then((response) => response.data);
}

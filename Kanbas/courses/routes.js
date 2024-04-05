import * as dao from "./dao.js";

export default function CourseRoutes(app) {

  const findAllCourses = async (req, res) => {
    const courses = await dao.findAllCourses();
    res.json(courses);
  };

  const createCourse = async (req, res) => {
    const course = await dao.createCourse(req.body);
    console.log(course);
    res.json(course);
  };

  const deleteCourse = async (req, res) => {
    const status = await dao.deleteCourse(req.params.courseId);
    res.json(status);
  };

  const updateCourse = async (req, res) => {
    const { courseId } = req.params;
    const status = await dao.updateCourse(courseId, req.body);
    //currentUser = await dao.findUserById(userId);
    res.json(status);
  };

  const findCourseById = async (req, res) => {
    const course = await dao.findCourseById(req.params.courseId);
    res.json(course);
  };


app.get("/api/courses/:id", findCourseById);
app.get("/api/courses", findAllCourses);
app.post("/api/courses", createCourse);
app.put("/api/courses/:id", updateCourse);
app.delete("/api/courses/:id", deleteCourse);
}
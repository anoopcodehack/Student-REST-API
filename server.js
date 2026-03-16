
const http = require("http");
const url = require("url");
const {
  getStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent
} = require("./controllers/studentController");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const method = req.method;

  res.setHeader("Content-Type", "application/json");

  if (path === "/students" && method === "GET") {
    return getStudents(req, res, parsedUrl.query);
  }

  if (path === "/students" && method === "POST") {
    return createStudent(req, res);
  }

  const studentIdMatch = path.match(/^\/students\/(.+)$/);

  if (studentIdMatch) {
    const id = studentIdMatch[1];

    if (method === "GET") return getStudentById(req, res, id);
    if (method === "PUT") return updateStudent(req, res, id);
    if (method === "DELETE") return deleteStudent(req, res, id);
  }

  res.writeHead(404);
  res.end(JSON.stringify({
    success: false,
    message: "Route not found"
  }));
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});

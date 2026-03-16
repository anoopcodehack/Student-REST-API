
const fs = require("fs");
const path = "./data/students.json";
const { validateStudent } = require("../utils/validate");

function readData() {
  if (!fs.existsSync(path)) return [];
  return JSON.parse(fs.readFileSync(path));
}

function writeData(data) {
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
}

exports.getStudents = (req, res, query) => {
  let students = readData();

  if (query.year) {
    students = students.filter(s => s.year == query.year);
  }

  const page = parseInt(query.page) || 1;
  const limit = parseInt(query.limit) || students.length;
  const start = (page - 1) * limit;

  const result = students.slice(start, start + limit);

  res.writeHead(200);
  res.end(JSON.stringify({
    success: true,
    data: result
  }));
};

exports.getStudentById = (req, res, id) => {
  const students = readData();
  const student = students.find(s => s.id === id);

  if (!student) {
    res.writeHead(404);
    return res.end(JSON.stringify({
      success: false,
      message: "Student not found"
    }));
  }

  res.writeHead(200);
  res.end(JSON.stringify({
    success: true,
    data: student
  }));
};

exports.createStudent = (req, res) => {
  let body = "";

  req.on("data", chunk => {
    body += chunk;
  });

  req.on("end", () => {
    const data = JSON.parse(body);

    const error = validateStudent(data);
    if (error) {
      res.writeHead(400);
      return res.end(JSON.stringify({
        success: false,
        message: error
      }));
    }

    const students = readData();

    const newStudent = {
      id: Date.now().toString(),
      ...data,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    students.push(newStudent);
    writeData(students);

    res.writeHead(201);
    res.end(JSON.stringify({
      success: true,
      data: newStudent
    }));
  });
};

exports.updateStudent = (req, res, id) => {
  let body = "";

  req.on("data", chunk => {
    body += chunk;
  });

  req.on("end", () => {
    const students = readData();
    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
      res.writeHead(404);
      return res.end(JSON.stringify({
        success: false,
        message: "Student not found"
      }));
    }

    const updatedData = JSON.parse(body);

    const error = validateStudent(updatedData);
    if (error) {
      res.writeHead(400);
      return res.end(JSON.stringify({
        success: false,
        message: error
      }));
    }

    students[index] = {
      ...students[index],
      ...updatedData,
      updatedAt: new Date()
    };

    writeData(students);

    res.writeHead(200);
    res.end(JSON.stringify({
      success: true,
      data: students[index]
    }));
  });
};

exports.deleteStudent = (req, res, id) => {
  const students = readData();
  const newStudents = students.filter(s => s.id !== id);

  if (students.length === newStudents.length) {
    res.writeHead(404);
    return res.end(JSON.stringify({
      success: false,
      message: "Student not found"
    }));
  }

  writeData(newStudents);

  res.writeHead(200);
  res.end(JSON.stringify({
    success: true,
    message: "Student deleted"
  }));
};


exports.validateStudent = (student) => {
  const { name, email, course, year } = student;

  if (!name || !email || !course || !year)
    return "All fields are required";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email))
    return "Invalid email format";

  if (year < 1 || year > 4)
    return "Year must be between 1 and 4";

  return null;
};

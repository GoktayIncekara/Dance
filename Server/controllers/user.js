import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import StudentModal from "../models/student.js";
import SchoolModal from "../models/school.js";

/* export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (!oldUser)
      return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
      expiresIn: "1h",
    });

    res.status(200).json({ userObject: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
}; */

export const signup = async (req, res) => {
  if (req.body.role === 0) {
    const { fullname, email, city, phone, password, birthday } = req.body;
    try {
      const oldStudent = await StudentModal.findOne({ email });
      console.log(oldStudent);
      if (oldStudent)
        return res.status(400).json({ message: "Student already exists" });

      const hashedPassword = await bcrypt.hash(password, 12);

      const studentObject = await StudentModal.create({
        fullname,
        email,
        city,
        phone,
        password: hashedPassword,
        birthday,
      });

      const token = jwt.sign(
        { email: studentObject.email, id: studentObject._id },
        process.env.secret,
        { expiresIn: "1h" }
      );

      res.status(201).json({ studentObject, token });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });

      console.log(error);
    }
  } else if (req.body.role === 1) {
    const { schoolname, email, city, phone, password, year } = req.body;
    try {
      const oldSchool = await SchoolModal.findOne({ email });
      if (oldSchool)
        return res.status(400).json({ message: "School already exists" });

      const hashedPassword = await bcrypt.hash(password, 12);

      const schoolObject = await SchoolModal.create({
        schoolname,
        email,
        city,
        phone,
        password: hashedPassword,
        year,
      });

      const token = jwt.sign(
        { email: schoolObject.email, id: schoolObject._id },
        process.env.secret,
        { expiresIn: "1h" }
      );

      res.status(201).json({ schoolObject, token });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });

      console.log(error);
    }
  }
};

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import UserModal from "../modals/user.js";

export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const oldUser = await UserModal.findOne({ email });

    if (!oldUser)
      return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { email: oldUser.email, id: oldUser._id },
      process.env.secret,
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({ userObject: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signup = async (req, res) => {
  var userObject = null;
  try {
    const { email, city, phone, password, role } = req.body;

    const oldUser = await UserModal.findOne({ email });
    if (oldUser)
      return res.status(400).json({ message: "User is already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    if (req.body.role === 0) {
      const { fullname, birthday } = req.body;
      userObject = await UserModal.create({
        fullname,
        birthday,
        email,
        city,
        phone,
        password: hashedPassword,
        role,
      });
    } else if (req.body.role === 1) {
      const { schoolname, year } = req.body;
      userObject = await UserModal.create({
        schoolname,
        year,
        email,
        city,
        phone,
        password: hashedPassword,
        role,
      });
    }

    const token = jwt.sign(
      { email: userObject.email, id: userObject._id },
      process.env.secret,
      { expiresIn: "1h" }
    );

    res.status(200).json({ userObject, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};

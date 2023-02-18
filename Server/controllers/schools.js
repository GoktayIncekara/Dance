import SchoolModal from "../models/school.js";

export const getSchools = async (req, res) => {
  try {
    const schools = await SchoolModal.find();
    res.status(200).json(schools);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const addSchool = async (req, res) => {
  console.log("nbr");
  const { schoolname, year, email, city, phone, instructors } = req.body;
  try {
    const oldSchool = await SchoolModal.findOne({ email });

    if (oldSchool)
      return res.status(400).json({ message: "School is already exists" });

    const schoolObject = await SchoolModal.create({
      schoolname,
      year,
      email,
      city,
      phone,
      instructors,
    });

    res.status(200).json(schoolObject);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

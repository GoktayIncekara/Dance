import SchoolModal from "../models/school.js";

export const getSchools = async (req, res) => {
  try {
    const schools = await SchoolModal.find();
    res.status(200).json(schools);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

import UserModal from "../modals/user.js";

export const getSchools = async (req, res) => {
  try {
    const schools = await UserModal.find({ role: 1 });
    res.status(200).json(schools);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getSchool = async (req, res) => {
  const { id } = req.params;
  try {
    const school = await UserModal.findOne({ _id: id });
    res.status(200).json(school);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const addSchool = async (req, res) => {
  const { schoolname, year, email, city, phone, instructors } = req.body;
  try {
    const updatedSchool = await UserModal.findOneAndUpdate(
      { email },
      { instructors, active: true }
    );

    res.status(200).json({ userObject: updatedSchool });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

import expModel from "../models/exploreData.js";

const postData = async (req, res) => {
  const { name, price, type, place, image } = req.body;

  // Check if any field is empty
  if (!name || !price || !type || !place || !image) {
    return res.status(400).send({ msg: "All fields are mandatory" });
  }

  try {
    // Create new entry in the database
    await expModel.create({ ...req.body });
    res.send({ msg: "Property Listed" });
  } catch (err) {
    res.status(500).send({ msg: "Property has not been listed. Kindly check your details" });
  }
};

export default postData;

import UserModel from "../model/userModel.js";

//POST- create
export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (user) {
      return res.status(400).json({ msg: "User already exist!" });
    }

    const newUser = new UserModel({ name, email, password });
    await newUser.save();
    res.status(201).json({ details: [newUser] });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// GET -

export const datas = async (req, res) => {
  try {
    const data = await UserModel.find();

    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

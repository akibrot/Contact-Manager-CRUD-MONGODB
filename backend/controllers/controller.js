import { ObjectId } from "bson";
import ContactModel from "../model/Contactmodel.js";

export const welcome = (req, res) => {
  res.send("server started ");
};

export const createcontact = async (req, res) => {
  const newcontact = await new ContactModel(req.body);
  await newcontact.save();
  res.send("OK");
};
export const getallcontact = async (req, res) => {
  const allData = await ContactModel.find();
  res.send(allData);
};

export const edit = async (req, res) => {
  
  const newUpdate = await ContactModel.findByIdAndUpdate(
    req.body.id,
    req.body.Data
  );
  await newUpdate.save();
  res.send("OK");
};

export const Delete = async (req, res) => {
  const DeleteContact = await ContactModel.findByIdAndDelete(req.body.id);
  res.send("deleted");
};

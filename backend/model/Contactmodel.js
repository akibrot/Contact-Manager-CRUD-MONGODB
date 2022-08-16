import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
  fullname: { type: String },
  email: { type: String },
  homephone: { type: String },
  mobilephone: { type: String },
  pic: { type: Object },
});

const ContactModel = mongoose.model("Contact", contactSchema);
export default ContactModel;

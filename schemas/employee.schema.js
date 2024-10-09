import mongoose from "mongoose";

const salesSchema = mongoose.Schema({
  nameProduct: { type: String, require: true },
  amount: { type: Number, require: true },
  seller: { type: mongoose.Schema.Types.ObjectId, ref: "employee", unique: true },
});

const sales = mongoose.model("sales", salesSchema);

const employeeSchema = new mongoose.Schema({
  username: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  sales: [{ type: mongoose.Schema.Types.ObjectId, ref: "sales" }],
});

const employee = mongoose.model("employee", employeeSchema);

export { sales, employee };

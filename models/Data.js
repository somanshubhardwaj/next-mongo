// Models/Transaction.js

import mongoose from 'mongoose';

const DataSchema = new mongoose.Schema({
  col: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, default: Date.now },
});

const Data = mongoose.models.Data || mongoose.model('Data', DataSchema);
export default Data;

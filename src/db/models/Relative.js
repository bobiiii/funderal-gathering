import mongoose from 'mongoose';


const RelativeSchema = new mongoose.Schema({
    memorialId: { type: mongoose.Schema.Types.ObjectId, ref: 'Memorials' },
    name: { type: String, required: true },
    relation: { type: String, required: true },
    email: String,
    photo: String,

  },
  {
    timestamps: true,
  });
  
  export const RelativesModel = mongoose.models.Relatives || mongoose.model('Relatives', RelativeSchema);
import mongoose from 'mongoose';

const MemorialSchema = new mongoose.Schema({
  deceasedName: { type: String, required: true },
  birthDate: Date,
  deathDate: Date,
  biography: String,
  mainPhoto: String, // URL to image
  organizer: {
    name: String,
    email: String,
    relation: String
  },

  accessCode: { type: String, unique: true }, // For private memorials
  isPublic: { type: Boolean, default: true }
},
{
  timestamps: true,
});

export const MemorialModel =  mongoose.models.Memorials || mongoose.model('Memorials', MemorialSchema);
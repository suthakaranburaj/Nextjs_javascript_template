import mongoose from 'mongoose'

const otpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  otp: {
    type: String,
    required: true,
    length: 6
  },
  type: {
    type: String,
    enum: ['email_verification', 'password_reset'],
    default: 'email_verification'
  },
  isUsed: {
    type: Boolean,
    default: false
  },
  expiresAt: {
    type: Date,
    required: true
  }
}, {
  timestamps: true
})

// Index for faster queries and automatic cleanup
otpSchema.index({ email: 1, type: 1 })
otpSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 })

// Method to check if OTP is valid
otpSchema.methods.isValid = function() {
  return !this.isUsed && new Date() < this.expiresAt
}

// Method to mark OTP as used
otpSchema.methods.markAsUsed = function() {
  this.isUsed = true
  return this.save()
}

export default mongoose.models.OTP || mongoose.model('OTP', otpSchema) 
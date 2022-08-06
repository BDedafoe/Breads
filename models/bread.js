const mongoose = require('mongoose')
const { Schema } = mongoose 
const Baker = require('./baker')

const breadSchema = new Schema({
  name: { type: String, required: true },
  hasGluten: Boolean,
  image: { type: String, default: 'http://placehold.it/500x500.png' },
  baker: {
    type: Schema.Types.ObjectID,
    ref: 'Baker'
  }
})


// Static Bonus
// breadSchema.static.getBaker = function () {
//   return this.find(`${this.baker}`)
// }

// // Helper method
breadSchema.methods.getBakedBy = function(){
  return `${this.name} was baked with love by ${this.baker.name}, who has been with us since ${this.baker.startDate}`
}


const Bread = mongoose.model('Bread', breadSchema)
module.exports = Bread

  
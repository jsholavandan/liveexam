import * as mongoose from 'mongoose';

export interface IStudent extends mongoose.Document{
  name:string;
  class:string;
  marks:number;
}

let StudentSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  class:{
    type:String,
    required:true
  },
  marks:{
    type:Number
  }
});

export default mongoose.model<IStudent>("Student", StudentSchema);

import mongoose, {Schema} from "mongoose";

const useSchema = new Schema(
    {username:{
	       type:String,
		   required:true,
		   unique:true,
		   lowercase:true,
		   trim:true,
		   maxLength:20
	},
	
	password:{
	type:String,
	required:true,
	minLength:6,
	maxLength:20,
	},
	
	email:{
	  type:String,
	  required:true,
	  unique:true,
	  trim:true
	},
	
	{
	timestamp:true
	}
)
  export const User= mongoose.model("User",useSchema)
import mongoose,{Schema} from "mongoose"
import { User } from "./interface"


const UserSchema = new Schema<User>({
    name:{
        type:String,
        require:true
    },
    phoneNo:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    hobbies:{
        type:String,
        require:true
    }

},{
    timestamps: true
});
const UserModel = mongoose.model('User', UserSchema);

export default UserModel
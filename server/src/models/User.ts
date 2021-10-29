import {Schema, model, Types, ObjectId } from 'mongoose'

interface User {
    email: string
    password: string
    links: ObjectId[]
}


const schema = new Schema<User>({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    links: [{type: Types.ObjectId, ref: 'Link'}]
})

const userModel = model<User>('User', schema)

export default userModel
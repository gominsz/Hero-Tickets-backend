import mongoose from "mongoose"

export async function connect() {
    try {
        await mongoose.connect('mongodb+srv://teste2:teste123@cluster0.06d61z7.mongodb.net/',
        );
        console.log('Connect databate Success ');
    } catch (error) {
        console.log(" ~ fole: database.ts:5 ~ connect ~ error:", error)
    }
}
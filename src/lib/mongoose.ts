import mongoose from 'mongoose'

const connectToDB = async () => {
    try {
        await mongoose.connect(`${process.env.DB_URL}/codewithcc`)
    } catch (error) {
        console.error(error)
    }
}

export default connectToDB
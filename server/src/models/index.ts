import mongoose from "mongoose";
import config from 'config'

export const start = async () => {
    try {
        await mongoose.connect(config.get('mongoUri'))
    } catch (e) {
        console.log('Server error', e.message)
        process.exit(1)
    }
}
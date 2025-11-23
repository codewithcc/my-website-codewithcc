import mongoose from 'mongoose'
import {ServiceType} from "@/types"

const serviceSchema = new mongoose.Schema<ServiceType>(
    {
        icon: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        more: {
            type: String,
            required: true
        },
        show: {
            type: String,
            default: "No",
        },
        privacy: {
            type: String,
            default: "No",
        }
    },
    {
        timestamps: {
            currentTime: () => Date.now() + 5.5 * 60 * 60 * 1000
        }
    }
)

const Service = mongoose.models.Service || mongoose.model('Service', serviceSchema)
export default Service
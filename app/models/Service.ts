import mongoose from 'mongoose'

export interface ServiceType {
    _id: string,
    icon: string,
    title: string,
    description: string,
    private: boolean,
    show: boolean,
    createdAt: number,
    updatedAt: number
}

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
        show: {
            type: Boolean,
            default: false,
        },
        private: {
            type: Boolean,
            default: false,
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
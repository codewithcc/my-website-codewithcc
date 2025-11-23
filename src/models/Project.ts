import mongoose from 'mongoose'
import {ProjectType} from "@/types"

const projectSchema = new mongoose.Schema<ProjectType>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    bgImage: {
      type: String || null,
      default: null,
    },
    github: {
      type: String || null,
      default: null,
    },
    demo: {
      type: String || "No",
      default: "No",
    },
    privacy: {
      type: String || "No",
      default: "No",
    },
  },
  {
    timestamps: {
      currentTime: () => Date.now() + (5.5 * 60 * 60 * 1000)
    }
  }
)

const Project = mongoose.models.Project || mongoose.model('Project', projectSchema)
export default Project
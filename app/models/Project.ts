import mongoose from 'mongoose'

export interface ProjectType {
    _id: string,
    title: string,
    description: string,
    bgImage: string,
    stack: string[],
    github: string,
    more: boolean,
    show: boolean,
    private: boolean,
    createdAt: number,
    updatedAt: number
}

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
      type: String,
      default: null,
    },
    stack: {
      type: [String],
      default: [],
    },
    github: {
      type: String,
      default: null,
    },
    more: {
      type: Boolean,
      default: true,
    },
    show: {
      type: Boolean,
      default: false,
    },
    private: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: {
      currentTime: () => Date.now() + (5.5 * 60 * 60 * 1000)
    }
  }
);

const Project = mongoose.models.Project || mongoose.model('Project', projectSchema)
export default Project
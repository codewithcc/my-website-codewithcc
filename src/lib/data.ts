import axios, { AxiosInstance } from 'axios'
import {ProjectType, ProjectSimpleType, ServiceSimpleType, ServiceType} from "@/types"

const isServer = typeof window === "undefined"
const baseURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

const apiClient: AxiosInstance = axios.create({
    baseURL: isServer ? `${baseURL}/api` : '/api', 
    headers: {
        'Content-Type': 'application/json',
    },
})

export const ProjectApi = {
    async getShowProjects(): Promise<ProjectType[] | []> {
        try {
            const response = await apiClient.get<{ projects: ProjectType[] }>("/show-projects")
            return response.data.projects
        } catch (error) {
            console.log(error)
            return []
        }
    },

    async getProjects(): Promise<ProjectType[] | []> {
        try {
            const response = await apiClient.get<{ projects: ProjectType[] }>("/projects")
            return response.data.projects
        } catch (error) {
            console.log(error)
            return []
        }
    },

    async getProject(id: string): Promise<ProjectType | null> {
        try {
            const response = await apiClient.get<{ project: ProjectType }>(`/projects/${id}`)
            return response.data.project
        } catch (error) {
            console.log(error)
            return null
        }
    },

    async createProject(data: ProjectSimpleType): Promise<ProjectSimpleType | null> {
        try {
            const response = await apiClient.post<{ project: ProjectSimpleType }>("/projects", data)
            return response.data.project
        } catch (error) {
            console.log(error)
            return null
        }
    },

    async updateProject(id: string, data: ProjectSimpleType): Promise<ProjectSimpleType | null> {
        try {
            const response = await apiClient.put<{ project: ProjectSimpleType }>(`/projects/${id}`, data)
            return response.data.project
        } catch (error) {
            console.log(error)
            return null
        }
    },

    async deleteProject(id: string): Promise<ProjectSimpleType | null> {
        try {
            const response = await apiClient.delete<{ project: ProjectSimpleType }>(`/projects/${id}`)
            return response.data.project
        } catch (error) {
            return null
        }
    }
}

export const ServiceApi = {
    async getShowServices(): Promise<ServiceType[] | []> {
        try {
            const response = await apiClient.get<{ services: ServiceType[] }>("/show-services")
            return response.data.services
        } catch (error) {
            console.log(error)
            return []
        }
    },

    async getServices(): Promise<ServiceType[] | []> {
        try {
        const response = await apiClient.get<{ services: ServiceType[] }>(
            "/services"
        )
        return response.data.services
        } catch (error) {
        console.log(error)
        return []
        }
    },

    async getService(id: string): Promise<ServiceType | null> {
        try {
        const response = await apiClient.get<{ service: ServiceType }>(
            `/services/${id}`
        )
        return response.data.service
        } catch (error) {
        console.log(error)
        return null
        }
    },

    async createService(data: ServiceSimpleType): Promise<ServiceSimpleType | null> {
        try {
        const response = await apiClient.post<{ service: ServiceSimpleType }>(
            "/services",
            data
        )
        return response.data.service
        } catch (error) {
        console.log(error)
        return null
        }
    },

    async updateService(id: string, data: ServiceSimpleType): Promise<ServiceSimpleType | null> {
        try {
        const response = await apiClient.put<{ service: ServiceSimpleType }>(
            `/services/${id}`,
            data
        )
        return response.data.service
        } catch (error) {
        console.log(error)
        return null
        }
    },

    async deleteService(id: string): Promise<ServiceSimpleType | null> {
        try {
        const response = await apiClient.delete<{ service: ServiceSimpleType }>(
            `/services/${id}`
        )
        return response.data.service
        } catch (error) {
        console.log(error)
        return null
        }
    }
}

export const SendMessageApi = {
    async sendMessage(data: FormData): Promise<any | null> {
        try {
            const response = await apiClient.post("/send-message", data)
            return response.data
        } catch (error) {
            console.log(error)
            return null
        }
    }
}
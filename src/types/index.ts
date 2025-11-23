interface NavbarItemProps {
    link: string
    label: string
}

export interface NavbarProps {
    navList: NavbarItemProps[]
}

export interface ServiceCardProps {
    id: string,
    icon: string,
    title: string,
    description: string
}

export type ProjectType = {
    _id: string
    title: string
    description: string
    bgImage: string
    github: string
    demo: string
    show: "Yes" | "No"
    privacy: "Yes" | "No"
    createdAt: number
    updatedAt: number
}

export type ProjectSimpleType = Omit<ProjectType, "createdAt" | "updatedAt">

export type ServiceType = {
    _id: string
    icon: string
    title: string
    description: string
    more: string
    privacy: "Yes" | "No"
    show: "Yes" | "No"
    createdAt: number
    updatedAt: number
}

export type ServiceSimpleType = Omit<ServiceType, "createdAt" | "updatedAt">
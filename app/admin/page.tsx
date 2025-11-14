import { Metadata } from "next"
import Admin from "../components/Admin"

export const metadata: Metadata = {
    title: 'Admin | Code with Cc',
    description: ''
}

export default function AdminPage() {
    return (
        <Admin/>
    )
}
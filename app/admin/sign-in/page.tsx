import LogIn from '../../components/LogIn'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Sign In | Code with Cc',
    description: ''
}

export default function SignInPage() {
    return (
        <LogIn />
    )
}
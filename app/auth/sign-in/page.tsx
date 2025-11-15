import { assets } from "@/app/assets/assets";
import SignInForm from "@/app/components/Sign-In-Form";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Sign In | Code with Cc",
    description: "A secure sign-in page for authenticated access to admin tools and project management features."
}

export default function SignInPage() {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <div className="hidden lg:block">
                <SignInForm />
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-2 lg:hidden">
                <Image src={assets.ErrorIcon} alt="error" className="w-12 h-auto" />
                <p className="text-lg">Sorry! Admin feature only available for desktop mode.</p>
            </div>
        </div>
    )
}
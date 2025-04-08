import { handleSignOut } from "../actions/auth"
import Header from "@/components/block/Header"
import SignOutButtons from "../components/SignOutButtons"

export default function SignOutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFF8F5]">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md mx-auto">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-[#D85A60]">Duchess</h1>
            <p className="text-sm text-muted-foreground mt-1">Artisanal Pastries & Delights</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="h-32 bg-cover bg-center bg-[url('/images/image1.png')]"></div>

            <div className="p-6">
              <h2 className="text-xl font-semibold text-center mb-2">We&apos;ll Miss You!</h2>
              <p className="text-center text-muted-foreground mb-6">Are you sure you want to sign out?</p>

              <SignOutButtons onSignOut={handleSignOut} />

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  You can always sign back in to access your favorite pastries
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Have feedback?{" "}
              <a href="#" className="text-[#D85A60] hover:underline">
                Share Your Thoughts
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

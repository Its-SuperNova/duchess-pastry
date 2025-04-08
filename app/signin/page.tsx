import Header from "@/components/block/Header"
import { Button } from "@/components/ui/button"
import { signIn } from "@/auth"
import { GitHubLogoIcon } from "@radix-ui/react-icons"

export default function SignInPage() {
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
              <h2 className="text-xl font-semibold text-center mb-2">Welcome Back</h2>
              <p className="text-center text-muted-foreground mb-6">Sign in to order your favorite pastries</p>

              <form
                action={async () => {
                  "use server"
                  await signIn("github", { redirectTo: "/" })
                }}
              >
                <Button type="submit" className="w-full py-6 bg-[#D85A60] hover:bg-[#C04A50] text-white">
                  <GitHubLogoIcon className="mr-2 h-5 w-5" />
                  Continue with GitHub
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  By continuing, you agree to our{" "}
                  <a href="#" className="text-[#D85A60] hover:underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-[#D85A60] hover:underline">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Need help?{" "}
              <a href="#" className="text-[#D85A60] hover:underline">
                Contact Support
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

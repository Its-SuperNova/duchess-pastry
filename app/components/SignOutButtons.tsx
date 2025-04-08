"use client"

import { Button } from "@/components/ui/button"

interface SignOutButtonsProps {
  onSignOut: () => void
}

export default function SignOutButtons({ onSignOut }: SignOutButtonsProps) {
  return (
    <div className="flex gap-4">
      <form action={onSignOut} className="w-full">
        <Button type="submit" className="w-full py-6 bg-[#D85A60] hover:bg-[#C04A50] text-white">
          Yes, Sign Out
        </Button>
      </form>

      <Button
        variant="outline"
        className="w-full py-6 border-[#D85A60] text-[#D85A60] hover:bg-[#FFF0ED]"
        onClick={() => window.history.back()}
      >
        Cancel
      </Button>
    </div>
  )
} 
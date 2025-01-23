"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { TypewriterWithSyncedIcon } from "./components/typewriter"

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center p-4 md:p-8">
      {/* Main Container */}
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center gap-8">
        {/* Search Container */}
        <div className="w-full bg-white/[0.03] backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-[0_0_15px_rgba(255,255,255,0.03)]">
          <TypewriterWithSyncedIcon />
        </div>

        {/* Waitlist Button */}
        <div className="flex justify-center">
          <Button
            variant="outline"
            className="px-4 py-2 text-sm md:text-base bg-transparent border border-white/20 text-white hover:bg-white/10 hover:text-white transition-all duration-300"
            onClick={() => window.open("https://k0gfxe61jra.typeform.com/to/V6CoTccP", "_blank")}
          >
            waitlist
          </Button>
        </div>
      </div>
    </main>
  )
}


"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { TypewriterWithSyncedIcon } from "./components/typewriter"

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center p-4 md:p-8">
      {/* Main Container */}
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center gap-8">
        {/* Combined Container for Search and Waitlist */}
        <div className="w-full bg-white/[0.03] backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-[0_0_15px_rgba(255,255,255,0.03)] flex flex-col items-center gap-8">
          {/* Search Container */}
          <TypewriterWithSyncedIcon />
          <div className="flex flex-wrap justify-center gap-4">
            {/* Waitlist Button */}
            <Button
              variant="outline"
              className="px-4 py-2 text-sm md:text-base bg-transparent border border-white/20 text-white/40 hover:bg-white/20 hover:text-white transition-all duration-300"
              onClick={() => window.open("https://k0gfxe61jra.typeform.com/to/V6CoTccP", "_blank")}
            >
              waitlist
            </Button>
            {/* Google Button */}
            <Button
              variant="outline"
              className="px-4 py-2 text-sm md:text-base bg-transparent border border-white/20 text-white/40 hover:bg-white/20 hover:text-white transition-all duration-300"
              onClick={() => window.open("https://ebaad.notion.site/500k-chicken-nuggets-round-18783d8215c480479216f879fb26a3b3?pvs=4", "_blank")}
            >
              Invest
            </Button>
          
          </div>
        </div>
      </div>
    </main>
  )
}

"use client"

import React, { useState, useEffect } from "react"

const textsWithIcons = [
  {
    text: "Create a task to file taxes March 30th",
    icon: "https://img.icons8.com/?size=100&id=MFaX6nJlDgiU&format=png&color=000000",
  },
  {
    text: "Cancel all my work meetings on Wednesday ",
    icon: "https://img.icons8.com/?size=100&id=WKF3bm1munsk&format=png&color=000000",
  },
  {
    text: "Add Furqan from finc to the investor sheet",
    icon: "https://img.icons8.com/?size=100&id=30461&format=png&color=000000",
  },
]

const TYPING_SPEED = 15
const PAUSE_AFTER_LINE = 2000
const PAUSE_BEFORE_NEXT_LINE = 1000

export function TypewriterWithSyncedIcon() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [typedText, setTypedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  const currentLine = textsWithIcons[currentTextIndex]

  useEffect(() => {
    let typingTimeout

    if (isTyping) {
      if (typedText.length < currentLine.text.length) {
        typingTimeout = setTimeout(() => {
          setTypedText(currentLine.text.slice(0, typedText.length + 1))
        }, TYPING_SPEED)
      } else {
        typingTimeout = setTimeout(() => {
          setIsTyping(false)
        }, PAUSE_AFTER_LINE)
      }
    } else {
      typingTimeout = setTimeout(() => {
        setTypedText("")
        setCurrentTextIndex((prev) => (prev + 1) % textsWithIcons.length)
        setIsTyping(true)
      }, PAUSE_BEFORE_NEXT_LINE)
    }

    return () => clearTimeout(typingTimeout)
  }, [isTyping, typedText, currentTextIndex, currentLine.text])

  return (
    <div className="flex items-center justify-start gap-4 w-full" role="region" aria-live="polite">
      <img
        src={currentLine.icon || "/placeholder.svg"}
        alt=""
        role="presentation"
        className="w-[40px] h-[40px] flex-shrink-0"
      />
      <div className="overflow-hidden text-base md:text-lg lg:text-xl text-white flex-grow">
        {typedText}
        <span className="border-r-2 border-white ml-0.5 animate-blink" />
      </div>

      <style jsx>{`
                @keyframes blink {
                    0% { opacity: 1; }
                    50% { opacity: 0; }
                    100% { opacity: 1; }
                }
                .animate-blink {
                    animation: blink 0.7s steps(1) infinite;
                }
            `}</style>
    </div>
  )
}


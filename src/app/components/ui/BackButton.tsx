"use client"

import { useRouter } from "next/navigation"

export default function BackButton({ label = "← Volver" }) {

  const router = useRouter()

  return (

    <button
      onClick={() => router.back()}
      className="font-poppins text-sm text-[#0B1F2A] border border-gray-300 px-5 py-2 hover:border-[#AD8330] hover:text-[#AD8330] transition"
    >
      {label}
    </button>

  )
}
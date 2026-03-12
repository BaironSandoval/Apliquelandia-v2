"use client"

import Link from "next/link"

export default function HomeButton({ label = "← Inicio" }) {

  return (

    <Link href="/">

      <button
        className="font-poppins text-sm text-[#0B1F2A] border border-gray-300 px-5 py-2 hover:border-[#AD8330] hover:text-[#AD8330] transition"
      >
        {label}
      </button>

    </Link>

  )
}
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PongGame from '@/components/consulting/PongGame'

interface ConsultingHeaderProps {
  pongColor1?: number
  pongColor2?: number
  title?: string
}

export const ConsultingHeader = ({ title=`Consulting Services`, pongColor1=0xFFBCAA, pongColor2=0x4645D1 }: ConsultingHeaderProps) => (
  <div className="lg:pt-24 pb-11 py-11 container  min-h-[350px]">
    <div className="md:max-w-3xl mx-auto relative">
      <PongGame color1={pongColor1} color2={pongColor2} />
    </div>
    <header className="page-full-header text-center relative z-30">
      <Link href="/consulting/" className="h1-xl mx-auto text-center ">{title}</Link>
    </header>
  </div>
)
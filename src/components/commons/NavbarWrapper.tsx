'use client'

import { usePathname } from 'next/navigation'
import Navbar from '@/components/commons/Navbar'

export default function NavbarWrapper() {
  const pathname = usePathname()
  const isDashboard = pathname === '/dashboard'

  if (isDashboard) return null
  return <Navbar />
}
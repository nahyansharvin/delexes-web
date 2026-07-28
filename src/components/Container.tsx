import type { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
}

/** Centered content wrapper: 1200px max width + responsive horizontal padding. */
export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-content px-4 sm:px-6 lg:px-12 ${className}`}>
      {children}
    </div>
  )
}

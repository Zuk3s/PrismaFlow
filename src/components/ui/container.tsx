import { cn } from '@/lib/utils'
import type React from 'react'

export function Container({
  children,
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div className={cn('w-full px-5 sm:px-10 lg:px-10', className)} {...props}>
      {' '}
      {children}
    </div>
  )
}

'use client'

import { PostHogProvider as Provider } from 'posthog-js/react'
import { posthog } from '@/lib/posthog'
import { type ReactNode } from 'react'

export function PostHogProvider({ children }: { children: ReactNode }) {
  return <Provider client={posthog}>{children}</Provider>
} 
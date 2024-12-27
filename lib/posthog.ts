import posthog from 'posthog-js'

if (typeof window !== 'undefined') {
//   console.log('PostHog Environment Variables:', {
//     key: process.env.NEXT_PUBLIC_POSTHOG_KEY,
//     host: process.env.NEXT_PUBLIC_POSTHOG_HOST
//   })

  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    loaded: (posthog) => {
      if (process.env.NODE_ENV === 'development') {
        posthog.debug()
        console.log('PostHog loaded:', posthog.get_distinct_id())
      }
    },
    autocapture: true
  })
}

export { posthog } 
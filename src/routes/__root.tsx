import type { QueryClient } from '@tanstack/react-query'
import {
  createRootRouteWithContext,
  HeadContent,
  Scripts,
} from '@tanstack/react-router'
import appCss from '../styles.css?url'

interface MyRouterContext {
  queryClient: QueryClient
}

// Root route with context
export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'TanStack Start App' },
    ],
    links: [{ rel: 'stylesheet', href: appCss }],
  }),

  shellComponent: RootDocument,

  // Optional: default NotFound component for unmatched routes
  notFoundComponent: () => (
    <div className="flex items-center justify-center min-h-screen text-white text-2xl">
      404 — Page Not Found
    </div>
  ),
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-slate-900 text-white">
        {children}
        <Scripts />
      </body>
    </html>
  )
}

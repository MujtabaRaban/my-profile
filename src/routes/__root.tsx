// routes/__root.tsx
import type { QueryClient } from '@tanstack/react-query'
import {
  createRootRouteWithContext,
  HeadContent,
  Scripts,
  Outlet,
} from '@tanstack/react-router'
import { LoadingAnimation } from '../components/LoadingAnimation'
import appCss from '../styles.css?url'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Mujtaba Al Raban - Portfolio' },
    ],
    links: [{ rel: 'stylesheet', href: appCss }],
  }),

  shellComponent: RootDocument,

  pendingComponent: () => <LoadingAnimation message="Loading page..." />,

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
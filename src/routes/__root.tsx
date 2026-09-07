import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { AuthProvider } from '../contexts/AuthContext'
import { palette } from '../theme';

const RootLayout = () => (
  <AuthProvider>
    <div style={{
      backgroundColor: palette.light.background,
      height: '100vh',
    }}>
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  </AuthProvider>
)

export const Route = createRootRoute({ component: RootLayout })

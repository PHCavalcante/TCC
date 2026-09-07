import { createFileRoute } from '@tanstack/react-router'
import Dashboard from '../../pages/bakery/Dashboard'

export const Route = createFileRoute('/bakery/Dashboard')({
  component: Dashboard,
})

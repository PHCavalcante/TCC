import { createFileRoute } from '@tanstack/react-router'
import Home from '../pages/client/Home'

export const Route = createFileRoute('/')({
  component: Home,
})

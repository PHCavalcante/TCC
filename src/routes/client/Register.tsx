import { createFileRoute } from '@tanstack/react-router'
import Register from '../../pages/client/Register'

export const Route = createFileRoute('/client/Register')({
  component: Register,
})
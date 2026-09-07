import { createFileRoute } from '@tanstack/react-router'
import Login from '../../pages/client/Login'

export const Route = createFileRoute('/client/Login')({
  component: Login,
})

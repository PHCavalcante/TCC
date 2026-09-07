import { createFileRoute } from '@tanstack/react-router'
import Login from '../../pages/bakery/Login'

export const Route = createFileRoute('/bakery/Login')({
  component: Login,
})

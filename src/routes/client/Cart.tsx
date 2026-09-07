import { createFileRoute } from '@tanstack/react-router'
import Cart from '../../pages/client/Cart'

export const Route = createFileRoute('/client/Cart')({
  component: Cart,
})

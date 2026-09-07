import { createFileRoute } from '@tanstack/react-router'
import Orders from '../../pages/bakery/Orders'

export const Route = createFileRoute('/bakery/Orders')({
  component: Orders,
})

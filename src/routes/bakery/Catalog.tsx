import { createFileRoute } from '@tanstack/react-router'
import Catalog from '../../pages/bakery/Catalog'

export const Route = createFileRoute('/bakery/Catalog')({
  component: Catalog,
})

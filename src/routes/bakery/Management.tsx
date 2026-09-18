import { createFileRoute } from '@tanstack/react-router'
import Management from '../../pages/bakery/Management'

export const Route = createFileRoute('/bakery/Management')({
  component: Management,
})

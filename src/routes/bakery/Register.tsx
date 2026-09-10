import { createFileRoute } from '@tanstack/react-router'
import Register from '../../pages/bakery/Register';

export const Route = createFileRoute('/bakery/Register')({
  component: Register,
})

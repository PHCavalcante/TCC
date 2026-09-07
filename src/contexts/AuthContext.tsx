import { createContext, useContext, useState, type ReactNode } from 'react'

type UserRole = 'client' | 'bakery' | null

interface AuthContextType {
  user: string | null
  role: UserRole
  login: (name: string, role: UserRole) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<string | null>(null)
  const [role, setRole] = useState<UserRole>(null)

  const login = (name: string, role: UserRole) => {
    setUser(name)
    setRole(role)
  }

  const logout = () => {
    setUser(null)
    setRole(null)
  }

  return (
    <AuthContext.Provider value={{ user, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within an AuthProvider')
  return context
}

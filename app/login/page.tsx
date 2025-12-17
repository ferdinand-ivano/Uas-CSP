import { login } from '@/actions/auth'

export default function LoginPage() {
  return (
    <form action={login} className="max-w-md mx-auto mt-20 space-y-4">
      <h1 className="text-2xl font-bold">Login</h1>

      <input
        name="email"
        type="email"
        placeholder="Email"
        className="w-full border p-2"
        required
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        className="w-full border p-2"
        required
      />

      <button className="w-full bg-green-600 text-white p-2 rounded">
        Login
      </button>
    </form>
  )
}


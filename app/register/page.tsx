import { register } from '@/actions/auth'

export default function RegisterPage() {
  return (
    <form action={register} className="max-w-md mx-auto mt-20 space-y-4">
      <h1 className="text-2xl font-bold">Register</h1>

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
        placeholder="Password (min 6 karakter)"
        className="w-full border p-2"
        required
      />

      <button className="w-full bg-blue-600 text-white p-2 rounded">
        Register
      </button>

      <p className="text-sm text-gray-500">
        Password minimal 6 karakter
      </p>
    </form>
  )
}

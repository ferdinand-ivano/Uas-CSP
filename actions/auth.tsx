'use server'

import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

//REGISTER
export async function register(formData: FormData): Promise<void> {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  if (!email || !password) {
    redirect('/register?error=Email dan password wajib diisi')
  }

  if (password.length < 6) {
    redirect('/register?error=Password minimal 6 karakter')
  }

  const supabase = await createClient()

  const { error } = await supabase.auth.signUp({
    email,
    password,
  })

  if (error) {
    redirect('/register?error=Password harus lebih dari atau sama dengan 6 karakter')
  }

  redirect('/login')
}

//LOGIN
export async function login(formData: FormData): Promise<void> {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const supabase = await createClient()

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    redirect('/login?error=' + encodeURIComponent(error.message))
  }

  redirect('/dashboard')
}

//LOGOUT
export async function logout(): Promise<void> {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect('/login')
}

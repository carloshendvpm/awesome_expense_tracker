'use client'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { signIn } from "next-auth/react"
import { toast } from "@/components/ui/use-toast"

export function AuthForm() {

  const form = useForm()

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      await signIn('email', { email: data.email, redirect: false})
      toast({
        title: 'Magic Link has been sent',
        description: 'Please check your email for login with the magic link'
      })
    }catch(err){
      toast({
        title: 'Error',
        description: 'An error occurred while sending the magic link. Please try again.'
      })
    }
  })
  return (
    <main>
      <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 md:px-6">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-2 text-center">
            <CardTitle className="text-3xl font-bold">Login</CardTitle>
            <CardDescription>Enter your email below and we'll send you a magic link to sign in.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" className="mt-1" {...form.register('email')} />
              </div>
              <Button type="submit" className="w-full">
                Send Magic Link
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AuthForm() {
  return (
    <main>
      <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 md:px-6">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-2 text-center">
            <CardTitle className="text-3xl font-bold">Login</CardTitle>
            <CardDescription>Enter your email below and we'll send you a magic link to sign in.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" className="mt-1" />
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
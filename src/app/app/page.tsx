import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { auth } from "@/services/auth"

export default async function Page() {
  const session = await auth()
  return (
    <main className="h-screen flex items-center justify-center flex-col">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarFallback className="capitalize font-bold">{session?.user?.email?.charAt(0)}</AvatarFallback>
        </Avatar>
        <span>{session?.user?.email}</span>
      </div>
    </main>
  )
}

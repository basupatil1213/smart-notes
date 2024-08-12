import { signIn } from "@/auth"
import { Button } from "@/components/ui/button"

const SignIn = () => {
  return (
    <form action={async () => {
        "use server"
        await signIn();
    }
        
    }>
        <Button type="submit">Sign In</Button>
    </form>
  )
}

export default SignIn
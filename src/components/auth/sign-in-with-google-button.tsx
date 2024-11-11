import Image from "next/image";
import { signIn } from "@/lib/auth";
import { Button } from "../ui/button";

export default function SignInWithGoogle() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <div>
        <Button type="submit">
          <Image
            src="/assets/svgs/google-icon.svg"
            width={20}
            height={20}
            alt="Google Icon"
            className="mr-2"
          />
          Signin with Google
        </Button>
      </div>
    </form>
  );
}

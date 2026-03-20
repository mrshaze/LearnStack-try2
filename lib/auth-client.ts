import { createAuthClient } from "better-auth/react"
import { adminClient, genericOAuthClient } from "better-auth/client/plugins"
export const { signIn, signUp, signOut, useSession } = createAuthClient({
    plugins: [
        genericOAuthClient(),
        adminClient(),
    ]
});
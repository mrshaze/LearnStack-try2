import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import {genericOAuth} from "better-auth/plugins"

export const auth = betterAuth({
  appName: "LearnStack",
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 60 * 60 * 24 * 7,
    }
  },
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  plugins: [
    genericOAuth({
      config: [
        {
          providerId: "authentik",
          clientId: process.env.AUTHENTIK_CLIENT_ID as string,
          clientSecret: process.env.AUTHENTIK_CLIENT_SECRET as string,
          discoveryUrl: process.env.AUTHENTIK_ISSUER as string,
        }
      ]
    })
  ],
  signIn: {
    onSuccess: async () => {
      redirect("/dashboard");
    },
  },
  user: {
    additionalFields: {
      role: {
        type: "string",
        defaultValue: "STUDENT"
      }
    }
  }
});
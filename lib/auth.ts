import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import {genericOAuth} from "better-auth/plugins"
import {admin} from "better-auth/plugins"
import { dash } from "@better-auth/infra";

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
    admin(),
    dash(),
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
      type: {
        type: "string",
        defaultValue: "STUDENT"
      }
    }
  }
});
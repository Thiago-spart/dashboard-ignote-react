/* eslint-disable no-mixed-operators */
/* eslint-disable @typescript-eslint/no-magic-numbers */
/* eslint-disable require-await */
/* eslint-disable @typescript-eslint/naming-convention */
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const refreshAccessToken = async (token: any | string | undefined) => {
	try {
		const url = `https://oauth2.googleapis.com/token?${new URLSearchParams({
			client_id: String(process.env.GOOGLE_CLIENT_ID),
			client_secret: String(process.env.GOOGLE_CLIENT_SECRET),
			grant_type: "refresh_token",
			refresh_token: token?.refreshToken,
		})}`;

		const response = await fetch(url, {
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			method: "POST",
		});

		const refreshedTokens = await response.json();

		if (!response.ok) {
			throw refreshedTokens;
		}

		return {
			...token,
			accessToken: refreshedTokens.access_token,
			accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
			refreshToken: refreshedTokens.refresh_token ?? token.refreshToken, // Fall back to old refresh token
		};
	} catch (error) {
		// console.log(error);

		return {
			...token,
			error: "RefreshAccessTokenError",
		};
	}
};

export default NextAuth({
	providers: [
		GoogleProvider({
			clientId: String(process.env.GOOGLE_CLIENT_ID),
			clientSecret: String(process.env.GOOGLE_CLIENT_SECRET),
			authorization: {
				params: {
					prompt: "consent",
					access_type: "offline",
					response_type: "code",
				},
			},
		}),
		// ...add more providers here
	],
	theme: {
		colorScheme: "light",
	},
	callbacks: {
		jwt: async ({ token, user, account }) => {
			if (account && user) {
				return {
					accessToken: account.access_token,
					accessTokenExpires: Date.now() + account.expires_in * 1000,
					refreshToken: account.refresh_token,
					user,
				};
			}

			// Return previous token if the access token has not expired yet
			if (Date.now() < token.accessTokenExpires) {
				return token;
			}

			// Access token has expired, try to update it
			return refreshAccessToken(token);
		},
		session: async ({ session, token }) => {
			session.user = token.user;
			session.accessToken = token.accessToken;
			session.error = token.error;

			return session;
		},
	},
});

# Gemini chatbot setup

1. Copy `.env.example` to `.env.local` and replace `your_gemini_api_key_here` with the key from Google AI Studio. Never commit `.env.local`.
2. Run locally with `npx vercel dev`, then open the local site.
3. Test the endpoint with a POST to `/api/chat` containing `{"messages":[{"role":"user","content":"What are your prices?"}]}`. FAQ questions are answered in the browser without an API call; other questions use Gemini.
4. In Vercel, add `GEMINI_API_KEY` and `GEMINI_MODEL` (`gemini-3.1-flash-lite`) under Project Settings → Environment Variables, then redeploy.
5. Missing credentials, invalid input, timeouts, blocked responses, quota exhaustion, and rate limits receive safe generic errors and the UI supplies a useful fallback.
6. Check Google AI Studio usage/limits for the API project. Billing is not enabled by this setup.

The endpoint limits history to 8 messages, input to 1,000 characters, output to 300 tokens, and has a 12-second timeout. Persistent/shared rate limiting is still a deployment blocker for public production; add an external limiter (for example, Vercel/KV or a gateway) before launch.

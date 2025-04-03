import blahBlah from "blah-blah";

blahBlah({
  projectId: process.env.BLAHBLAH_PROJECT_ID!,
  openAiApiKey: process.env.OPENAI_API_KEY!,
  googleClientId: process.env.GOOGLE_CLIENT_ID!,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  googleRefreshToken: process.env.GOOGLE_REFRESH_TOKEN!,
  exactSearchTerms: process.env.EXACT_SEARCH_TERMS
    ? JSON.parse(process.env.EXACT_SEARCH_TERMS)
    : [],
  looseSearchTerms: process.env.LOOSE_SEARCH_TERMS
    ? JSON.parse(process.env.LOOSE_SEARCH_TERMS)
    : [],
});

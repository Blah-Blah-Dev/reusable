import blahBlah from "blah-blah";

blahBlah({
  projectId: process.env.BLAHBLAH_PROJECT_ID!,
  openAiApiKey: process.env.OPENAI_API_KEY!,
  googleClientId: process.env.GOOGLE_CLIENT_ID!,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  googleRefreshToken: process.env.GOOGLE_REFRESH_TOKEN!,
  searchTerms: JSON.parse(process.env.SEARCH_TERMS!),
});

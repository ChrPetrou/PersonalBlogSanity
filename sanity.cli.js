import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'n5l86icy',
    dataset: 'production',
    cors: {
      origin: ['https://personal-blog-chrpetrou.vercel.app'],
    },
  },
})

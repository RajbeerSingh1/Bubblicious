import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'ajfjd32j',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};

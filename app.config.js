import 'dotenv/config';
  
  export default {
    name: 'Google-Places-Location',
    slug: 'Google-Places-Location',
    version: '1.0.0',
    extra: {
      EXPO_GOOGLE_PLACE_API: process.env.EXPO_GOOGLE_PLACE_API,
    },
  };
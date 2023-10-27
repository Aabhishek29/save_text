module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};


/**
 * Deployment process for save-text
 * npx expo export:web                          -> use this command for genrating web build
 * vc                                           -> use this command for hosting in vercel
 */
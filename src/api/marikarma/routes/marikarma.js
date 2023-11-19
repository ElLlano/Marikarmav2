module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/marikarma',
      handler: 'marikarma.getAiResponse',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};

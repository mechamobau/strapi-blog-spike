module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fb972bbab9fbe964bde2fc490abd4ab6'),
  },
});

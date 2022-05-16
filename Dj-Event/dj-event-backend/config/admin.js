module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b44fe3e50b19a46f35294a38f1727ce6'),
  },
});

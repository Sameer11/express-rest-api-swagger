const privateRoutes = {
  'GET /users': 'UserController.getAll',
  'GET /users/:id': 'UserController.getById',
};

module.exports = privateRoutes;

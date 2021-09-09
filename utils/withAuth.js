function withAuth(req, res, next) {
  // console.log(Object.keys(req));
  next();
}

module.exports = withAuth;

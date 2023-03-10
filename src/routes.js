import user from "./packages/user/routes";

const initRoutes = (app) => {
  app.use("/api/v1/user", user);
};

module.exports = initRoutes;

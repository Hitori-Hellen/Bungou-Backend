import user from "./packages/user/routes";
import userCms from "./packages/user/cms/routes";

const initRoutes = (app) => {
  app.use("/api/v1/user", user);
  app.use("/api/v1/cms/user", userCms);
};

module.exports = initRoutes;

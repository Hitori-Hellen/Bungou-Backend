import user from "./packages/user/routes";
import book from "./packages/book/routes"
import userCms from "./packages/user/cms/routes";

const initRoutes = (app) => {
  app.use("/api/v1/user", user);
  app.use("/api/v1/cms/user", userCms);
  app.use("/api/v1/book", book);
};

module.exports = initRoutes;

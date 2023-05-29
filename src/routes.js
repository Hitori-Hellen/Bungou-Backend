import user from "./packages/user/routes";
import book from "./packages/book/routes";
import review from "./packages/review/routes";
import userCms from "./packages/user/cms/routes";
import payment from "./packages/payment_details/routes";

const initRoutes = (app) => {
  app.use("/api/v1/user", user);
  app.use("/api/v1/cms/user", userCms);
  app.use("/api/v1/book", book);
  app.use("/api/v1/review", review);
  app.use("/api/v1/payment", payment);
};

module.exports = initRoutes;

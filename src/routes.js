import user from "./packages/user/routes";
import book from "./packages/book/routes";
import review from "./packages/review/routes";
import userCms from "./packages/user/cms/routes";
import payment from "./packages/payment_details/routes";
import admin from "./packages/admin/routes";
import order from "./packages/order/routes";

const initRoutes = (app) => {
  app.use("/api/v1/user", user);
  app.use("/api/v1/cms/user", userCms);
  app.use("/api/v1/book", book);
  app.use("/api/v1/review", review);
  app.use("/api/v1/payment", payment);
  app.use("/api/v1/admin/", admin);
  // app.use("/api/v1/cms/book", bookCms);
  app.use("/api/v1/order", order);
};

module.exports = initRoutes;

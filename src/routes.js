import user from "./packages/user/routes";
import book from "./packages/book/routes";
import review from "./packages/review/routes";
import userCms from "./packages/user/cms/routes";
import payment from "./packages/payment_details/routes";
<<<<<<< Updated upstream
import admin from "./packages/admin/routes";
=======
import order from "./packages/order/routes";
>>>>>>> Stashed changes

const initRoutes = (app) => {
  app.use("/api/v1/user", user);
  app.use("/api/v1/cms/user", userCms);
  app.use("/api/v1/book", book);
  app.use("/api/v1/review", review);
  app.use("/api/v1/payment", payment);
<<<<<<< Updated upstream
  app.use("/api/v1/admin/", admin);
  // app.use("/api/v1/cms/book", bookCms);
=======
  app.use("/api/v1/order", order);
>>>>>>> Stashed changes
};

module.exports = initRoutes;

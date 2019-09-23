'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/login',controller.home.loginPage);
  router.put('/addblogs',controller.home.addBlogs);
  router.get('/getblogs',controller.home.getBlogs);
  router.post('/updatemsg',controller.home.updateMsg);
};

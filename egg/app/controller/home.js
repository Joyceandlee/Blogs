'use strict';

const Controller = require('egg').Controller;
const { JWT } = require('../extends/helper')

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async loginPage(ctx) {
    let { name, password } = ctx.request.body;
    if (name && password) {
      let res = await this.ctx.service.index.login(ctx.request.body);
      // delete res.password;
      try {
        let token = JWT(res.data, this.app.config.keys)
        if (res.code === 1) {
          this.ctx.status = 200;
          this.ctx.body = {
            code: 1,
            msg: "登录成功！",
            token,
            data: res.data
          }
        } else {
          this.ctx.body = res;
          this.ctx.status = 401;
        }
      } catch (err) {
        this.ctx.status = 401;
        this.ctx.body = {
          code: 0,
          err
        }
      }

    } else {
      this.ctx.status = 401;
      this.ctx.body = {
        code: 0,
        msg: "用户名或密码不完整！"
      }
    }
  }

  async updateMsg(ctx) {

    let res = await this.ctx.service.index.updateMsg(ctx.request.body)

    if (res.code === 1) {
      try {
        this.ctx.status = 200;
        this.ctx.body = res
      } catch (err) {
        this.ctx.status = 401;
        this.ctx.body = {
          code: 0,
          msg: "updateList failed",
          err
        }
      }
    } else {
      this.ctx.body = res;
    }

  }

  async addBlogs(ctx) {
    console.log(ctx.request.body)
    let res = await this.ctx.service.index.addList(ctx.request.body)

    if (res.code === 1) {
      try {
        this.ctx.status = 200;
        this.ctx.body = res
      } catch (err) {
        this.ctx.status = 401;
        this.ctx.body = {
          code: 0,
          msg: "addlist failed",
          err
        }
      }
    } else {
      this.ctx.body = res;
    }
  }

  async getBlogs() {
    let res = await this.ctx.service.index.getList();
    if (res.code === 1) {
      try {
        this.ctx.status = 200;
        this.ctx.body = res
      } catch (err) {
        this.ctx.status = 200;
        this.ctx.body = {
          code: 0,
          msg: 'getlist failed',
          err
        }
      }
    } else {
      this.ctx.status = 401;
      this.ctx.body = {
        code: 0,
        msg: 'getlist failed'
      }
    }
  }
}

module.exports = HomeController;

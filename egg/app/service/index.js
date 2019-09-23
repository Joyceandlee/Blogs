const Service = require('egg').Service;

class IndexService extends Service {
    async login(ctx) {
        const { name, password } = ctx;

        const data = await this.app.mysql.get('listinfo', {
            name: name,
            password: password
        })

        if (data) {
            return {
                code: 1,
                msg: "login success",
                data
            }
        } else {
            return {
                code: 0,
                msg: "login failed"
            }
        }
    }

    async updateMsg(ctx) {
        let $data = await this.app.mysql.update('listinfo', ctx);

        if ($data) {
            return {
                code: 1,
                msg: "更新成功！"
            }
        } else {
            return {
                code: 0,
                msg: "更新失败！"
            }
        }
    }

    async addList(ctx) {
        let { autor, title, content } = ctx;

        let $sql = await this.app.mysql.insert('blogs', {
            autor, title, content
        })

        if ($sql) {
            return {
                code: 1,
                msg: '添加成功！'
            }
        } else {
            return {
                code: 0,
                msg: '添加失败！'
            }
        }
    }

    async getList() {
        let data = await this.app.mysql.select('blogs');

        if (data) {
            return {
                code: 1,
                msg: "getlist success",
                data
            }
        } else {
            return {
                code: 0,
                msg: "getlist failed"
            }
        }
    }
}

module.exports = IndexService;
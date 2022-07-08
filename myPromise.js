const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

function Promise2(executor) {
    _this = this
    this.state = PENDING; // 保存状态
    this.result = undefined; // 保存成功结果
    this.reason = undefined; // 保存失败原因

    const resolve = (result) => {

            if (_this.state === PENDING) {
                _this.state = FULFILLED
                console.log(_this);
                _this.result(result) // 保存成功结果
            }     

    }
    const reject = (reason) => {

            if (_this.state === PENDING) {
                _this.state = REJECTED
                _this.reason(reason) // 保存失败原因
            }    

    }
    // 立即执行Promise并捕获错误将错误传入reject()函数
    try {
        executor(resolve, reject);
    } catch (e) {
        this.reject(e);
    }
}

Promise2.prototype.then = function (onFulfilled, onRejected) {
    let RPromise = new Promise((resolve, reject) => {
            if (typeof onFulfilled === 'function') {
                console.log('_this',_this);
                _this.result = (result) => {
                    try {
                        const res = onFulfilled(result)
                        resolve(res)
                    } catch (error) {
                        reject(error)
                    }
                }

            } else {
                _this.result = function (params) {
                    return params
                }
            }
            if (typeof onRejected === 'function') {
                _this.reason = (reason) => {
                    try {
                        const res = onRejected(reason)
                        resolve(res)
                    } catch (error) {
                        reject(error)
                    }
                }
            } else {
                _this.reason = function (params) {
                    return params
                }
            }    

    })
    return RPromise
}

Promise2.all = function (promises) {
    return new Promise2((resolve,reject) => {
        if (!promises.length) {
            resolve([])
        } else {
            let result = []
            let index = 0;
            for (let i = 0; i < Promise2.length; i++) {
                Promise2[i].then((res) => {
                    result[i]=res
                    if (++index === promises.length) {
                        resolve(reslut)
                    }
                }),(error) => {
                    reject(error);
                    return;
                }
            }
        }

    })
}

Promise2.race() = function (promises) {
    return new Promise2((resolve,reject) => {
        if (!promises.length) {
            resolve
        } else {
            for (let i = 0; i < Promise2.length; i++) {
                Promise2[i].then((res) => {
                    resolve(res)
                })
            }
        }
    }),(error) => {
        reject(error)
        return
    }
}
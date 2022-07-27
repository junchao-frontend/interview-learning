class myPromise {
  static pending = '待定'; static fulfilled = '成功'; static rejected = '失败';
  constructor(fn) {
    this.status = myPromise.pending
    this.result = null
    this.resolveCallbacks = []
    this.rejectCallbacks = []
    try {
      fn(this.resolve.bind(this), this.reject.bind(this))
    } catch (error) {
      this.reject(error)
    }
  }
  resolve (result) {
    setTimeout(() => {
      if (this.status == myPromise.pending) {
        this.status = myPromise.fulfilled
        this.result = result
        this.resolveCallbacks.forEach(callback => {
          callback(result)
        })
      }
    })
  }
  reject (result) {
    setTimeout(() => {
      if (this.status == myPromise.pending) {
        this.status = myPromise.rejected
        this.result = result
        this.rejectCallbacks.forEach(callback => {
          callback(result)
        })
      }
    })
  }
  then (onFULFILLED, onREJECTED) {
    return new myPromise((resolve, reject) => {
      if (this.status == myPromise.pending) {
        this.resolveCallbacks.push(onFULFILLED)
        this.rejectCallbacks.push(onREJECTED)
      }
      if (this.status == myPromise.fulfilled) {
        setTimeout(() => {
          onFULFILLED(this.result)
        })
      }
      if (this.status == myPromise.rejected) {
        setTimeout(() => {
          onREJECTED(this.result)
        })
      }
    })
  }
}
// 该 js 暴露 一些 关于 localStorage 和 sessionStorage
import md5 from 'js-md5';
/**
 *
 * @param {array{} | string} key 可以传递一个字符key，或一个对象，对象中的每个 item 都是这4项参数的数组
 * @param {any} value 存储值 会被转为 json 存储
 * @param {number} deadline 最后有效时间
 * @param {Boolean} hash 是否md5加密
 */
class Storage {
  constructor(type) {
    this.type = type;
  }
  set(key, value, deadline, hash) {
    if (Array.isArray(key)) {
      key.forEach((item) => {
        set.apply(this, item);
      });
      return;
    }
    console.log('吃点什么', value);
    hash && (value = md5(value));
    console.log('喝点', JSON.stringify(value));
    window[this.type].setItem(key + 'deadline', deadline || 10 ** 20);
    window[this.type].setItem(key, JSON.stringify(value));
  }
  get(key) {
    const deadline = window[this.type].getItem(key + 'deadline');
    if (deadline < Date.now()) {
      this.remove(key);
      return undefined;
    }
    return JSON.parse(window[this.type].getItem(key));
  }
  remove(key) {
    console.log(key)
    window[this.type].removeItem(key);
    window[this.type].removeItem(key + 'deadline');
  }
  clear() {
    window[this.type].clear();
  }
}
export default {
  local: new Storage('localStorage'),
  session: new Storage('sessionStorage')
};

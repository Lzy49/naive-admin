import { writeText } from 'clipboard-polyfill/text';
export default (value) =>
  writeText(value).then(
    (res) => {
      window.$message.success('copy 成功');
    },
    (res) => {
      const message = useMessage();
      message.warning('copy 失败 ，您的浏览器不支持自动 copy，请您手动 copy ');
    }
  );

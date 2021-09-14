import { writeText } from 'clipboard-polyfill/text';
import { useMessage } from 'naive-ui';
export default (value) =>
  writeText(value).then(
    (res) => {
      const message = useMessage();
      message.success('copy 成功');
    },
    (res) => {
      const message = useMessage();
      message.warning('copy 失败 ，您的浏览器不支持自动 copy，请您手动 copy ');
    }
  );

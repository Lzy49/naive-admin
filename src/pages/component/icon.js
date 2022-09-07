import { h } from "vue";
import { NIcon } from "naive-ui";
import * as icos from "@vicons/antd";
export default (args) => {
  return h(NIcon, () => h(icos[args.type]));
};

import { defineComponent, h } from 'vue';
import Image from '@/components/image.jsx';
export default defineComponent({
  props: {
    src: String
  },
  render() {
    return h(
      Image,
      {
        round: true,
        size: 40,
        src: this.$props.src,
        ...this.$attrs
      },
      null
    );
  }
});

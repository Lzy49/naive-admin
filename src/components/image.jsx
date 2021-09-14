import { defineComponent } from 'vue';
import { NAvatar, NPopover, NButton } from 'naive-ui';
export default defineComponent({
  props: {
    src: String,
  },
  render() {
    return (
      <NPopover
        {...this.$attrs}
        v-slots={{
          trigger: () => <NAvatar src={this.src} {...this.$attrs} />
        }}
      >
        <img src={this.src} width="200" />
      </NPopover>
    );
  }
});

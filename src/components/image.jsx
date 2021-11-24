import { defineComponent } from 'vue';
import { NAvatar, NPopover, NImage } from 'naive-ui';
export default defineComponent({
  props: {
    src: String,
    size: {
      type: Number,
      default: 50
    }
  },
  render() {
    return (
      <div
        style={{
          width: `${this.size}px`,
          height: `${this.size}px`,
          overflow: 'hidden',
          borderRadius: '50%',
          display: 'inline-flex',
          
        }}
      >
        <NImage width="50" src={this.src} />
      </div>
    );
  }
});

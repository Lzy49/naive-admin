const watchEvents = [];
export const onresize = (event) => {
  event();
  watchEvents.push(event);
};
let timeout;
window.onresize = () => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    watchEvents.forEach((item) => item());
  }, 500);
};

import storage from '@/utils/storage';
export const uploadCofing = {
  headers: () => ({ token: storage.local.get('token') }),
  action: import.meta.env.VITE_PATH_BASE + 'upload',
  itemCount: 1000
};
export const types = {
  video: ['mp4'],
  image: ['jpg', 'jpeg', 'png']
};

export const fileTypeOf = (url) => {
  for (const key in types) {
    if (types[key].find((item) => url.includes(item))) {
      return key;
    }
  }
};

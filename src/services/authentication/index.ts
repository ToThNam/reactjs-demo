import { axiosConfig } from 'services';

const authentication = {
  singnIn() {
    const url: string = '/authentication/singIn';
    return axiosConfig.post(url);
  },
  singnUp() {
    const url: string = '/authentication/singUp';
    return axiosConfig.post(url);
  },
};
export default authentication;

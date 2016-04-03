import { ajax } from 'jquery';
export default async function logger(log) {
  try {
    const response = await ajax(`/internal/log/${log}`);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

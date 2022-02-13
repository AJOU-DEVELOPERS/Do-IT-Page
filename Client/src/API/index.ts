interface Props {
  api: any;
  data?: any;
}
interface _Props {
  api: any;
  apiSrc: string;
  data?: any;
}

export const API = async ({ api, data }: Props) => {
  try {
    const { res, status } = await api(data);
    if (status < 400) return res;
    throw new Error(res.error);
  } catch (err) {
    console.log(err, "에러핸들링 추가");
  }
};

export const _API = async ({ api, apiSrc, data }: _Props) => {
  try {
    const { res, status } = await api(apiSrc, data);
    if (status < 400) return res;
    throw new Error(res.error);
  } catch (err) {
    console.log(err, "에러핸들링 추가");
  }
};

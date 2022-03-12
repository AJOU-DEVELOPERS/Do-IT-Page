interface Props {
  api: any;
  data?: any;
}
interface _Props {
  api: any;
  apiSrc: string;
  data?: any;
}

const URL = [
  "http://121.167.35.48:4000", // 01
  "http://localhost:4000",
  "http://192.168.0.42:4000", // 재명이집 호용이컴터
];
export const TARGET_URL = URL[1];

export const API = async ({ api, data }: Props) => {
  try {
    const { isSuccess, code, res, error } = await api(data);
    if (isSuccess) return res;
    throw new Error(error);
  } catch (err) {
    console.log(err, "에러핸들링 추가");
  }
};

export const _API = async ({ api, apiSrc, data }: _Props) => {
  try {
    const { isSuccess, code, res, error } = await api(apiSrc, data);
    if (isSuccess) return res;
    throw new Error(error);
  } catch (err) {
    console.log(err, "에러핸들링 추가");
  }
};

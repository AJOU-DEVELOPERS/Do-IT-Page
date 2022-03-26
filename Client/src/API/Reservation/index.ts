import {
  API_GET_OPTION,
  GET_HEADER_TOKEN,
  GET_RESERVATION_URL,
  PATCH_RESERVATION_ACCEPT,
  PATCH_RESERVATION_DENY,
  POST_RESERVATION_URL,
} from "@Constant/API";
import { postReservationRoomBodyProps } from "@Type/API";
import axios from "axios";

export const postReservationRoom = async (
  body: postReservationRoomBodyProps
) => {
  const { data } = await axios.post(
    POST_RESERVATION_URL,
    body,
    GET_HEADER_TOKEN()
  );
  return data;
};

export const getReservationRoom = async (url: string) => {
  const { data } = await axios.get(
    GET_RESERVATION_URL + url,
    GET_HEADER_TOKEN()
  );
  return data;
};

export const postReservationAccept = async (url: string) => {
  const { data } = await axios.patch(
    PATCH_RESERVATION_ACCEPT + url,
    GET_HEADER_TOKEN()
  );
  return data;
};

export const postReservationDeny = async (url: string) => {
  const { data } = await axios.patch(
    PATCH_RESERVATION_DENY + url,
    GET_HEADER_TOKEN()
  );
  return data;
};

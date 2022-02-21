/* eslint-disable @typescript-eslint/no-empty-interface */
import { DateProps } from "..";

export interface ReservationRecoilProps extends DateProps {}

export interface reservationDatasProps {
  date: string;
  hour: string;
  host: string;
}

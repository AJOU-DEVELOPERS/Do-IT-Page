import Button from "@Atoms/Button";
import {
  Table,
  TableHead,
  TableRow,
  TableTitle,
  TableBody,
  TableData,
} from "@Atoms/Table/styles";
import { SmallButtonType } from "@Style/.";
import { postReservationRoomBodyProps } from "@Type/API";
import { RESERVATION_TITLE } from "../common";
import { reserveAccept, reserveDeny } from "../util";
import { ButtonContainer } from "./styles";

const RoomRegisterList = ({
  list,
}: {
  list: postReservationRoomBodyProps[];
}) => {
  const handleReserveAccept = ({ target }: { target: any }) =>
    reserveAccept({ target });
  const handleReserveDeny = ({ target }: { target: any }) =>
    reserveDeny({ target });

  return (
    <Table>
      <TableHead>
        <TableRow>
          {RESERVATION_TITLE.map((item) => (
            <TableTitle key={item.value}>{item.title}</TableTitle>
          ))}
          <TableTitle>승인 및 거절</TableTitle>
        </TableRow>
      </TableHead>
      <TableBody>
        {list.map((item: any) => (
          <TableRow
            key={item.reservationIdx}
            id="reservationContainer"
            data-idx={item.reservationIdx}
          >
            {RESERVATION_TITLE.map((title) => (
              <TableData key={title.value}>{item[title.key]}</TableData>
            ))}
            <TableData>
              <ButtonContainer>
                <Button
                  {...SmallButtonType}
                  onClick={handleReserveAccept}
                  title="승인"
                />
                <Button
                  {...SmallButtonType}
                  onClick={handleReserveDeny}
                  title="거절"
                />
              </ButtonContainer>
            </TableData>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default RoomRegisterList;

import styled from "styled-components";

export const Table = styled.table`
  border-collapse: separate;
  border: 1px solid #dddddd;
  border-spacing: 0;
  table-layout: fixed;
  text-align: center;
  line-height: 1.5;
  margin: 5px 0;
  width: 100%;
`;

export const TableHead = styled.thead`
  padding-right: 10px;
  background-color: #eeeeee;
  display: block;
  border-bottom: 1px solid #cccccc;
  border-top: 1px solid #757575;
`;

export const TableTitle = styled.th`
  width: 100px;
  padding: 10px;
  font-weight: bold;
  vertical-align: top;
  white-space: nowrap;
  color: #757575;
`;

export const TableBody = styled.tbody`
  display: block;
  max-height: 30vh;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #cccccc;
    border-radius: 5px;
  }
`;

export const TableRow = styled.tr`
  width: 100%;
  table-layout: fixed;
  display: table;
  transition-duration: 0.3s;
  border-bottom: 1px solid #eeeeee;
`;

export const TableData = styled.td`
  width: 100px;
  padding: 10px;
  border-right: 1px solid #eeeeee;
`;

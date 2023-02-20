import { TableBody, TableCell, TableRow } from '@mui/material';
import { TableConfigCells } from './HeaderTable';

export interface BodyTableProps {
  data: [];
  headerCells: TableConfigCells[];
}

export const BodyTable = (props: BodyTableProps): JSX.Element => {
  const { data, headerCells } = props;

  return (
    <TableBody key='table_body'>
      {data.map((row: any, index: number) => {
        return (
          <TableRow className=' hover:bg-slate-200 cursor-pointer' key={row._id}>
            {headerCells.map((headCell: TableConfigCells) => (
              <TableCell onClick={() => console.log(row)} style={{ width: headCell.style }} align={headCell.align} className={headCell.align} key={`${row._id}_${headCell.id}`}>
                {headCell.value(row)}
              </TableCell>
            ))}
          </TableRow>
        );
      })}
    </TableBody>
  );
};

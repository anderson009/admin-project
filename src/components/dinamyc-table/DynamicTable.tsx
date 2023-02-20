/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Table, TableContainer, TablePagination } from "@mui/material";
//import Spinner from '../spinner/Spinner';
import { BodyTable } from "./BodyTable";
import { HeaderTable, TableConfigCells } from "./HeaderTable";

export interface DinamycTableProps {
  headerCells: TableConfigCells[];
  data: [];
  orderField?: string;
  orderBy?: "asc" | "desc";
  page?: number;
  rowsPerPage?: number;
  total?: number;
  loading?: boolean;
  onSortChange?: (field: string) => void;
  onPageChange?: (page: number) => void;
  onRowsPerPageChange?: (rowsPerPage: number) => void;
}

export const DynamicTable = (props: DinamycTableProps): JSX.Element => {
  const {
    headerCells,
    loading,
    data = [],
    orderField,
    rowsPerPage,
    orderBy = "asc",
    page,
    total = 9,
    onSortChange,
    onPageChange,
    onRowsPerPageChange,
  } = props;

  function changePage(event: unknown, newPage: number): void {
    if (onPageChange !== undefined) {
      onPageChange(newPage);
    }
  }

  function rowsPerPageChange(event: React.ChangeEvent<HTMLInputElement>): void {
    if (onRowsPerPageChange !== undefined) {
      onRowsPerPageChange(parseInt(event.target.value, 9));
    }
  }

  return (
    <>
      <TableContainer className="w-full">
        <Table>
          {/* Header table */}
          <HeaderTable
            headerCells={headerCells}
            orderBy={orderBy}
            orderField={orderField}
          />

          {/* Body table */}
          {!(loading ?? false) ? (
            <BodyTable data={data} headerCells={headerCells} />
          ) : null}
        </Table>
        {/* {loading ?? false ? <Spinner /> : null} */}
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={total}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={changePage}
        onRowsPerPageChange={rowsPerPageChange}
      />
    </>
  );
};

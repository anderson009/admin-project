import { TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";

export interface TableConfigCells {
  id: string;
  title: string;
  value: (row: any) => any;
  align?: string;
  component?: string;
  scope?: string;
  style?: any 
}

export interface HeaderTableProps {
  headerCells: TableConfigCells[];
  orderField: string;
  orderBy: "asc" | "desc";
  onSortChange?: (field: string) => void;
}

export const HeaderTable = (props: HeaderTableProps): JSX.Element => {
  const { headerCells, orderField, orderBy, onSortChange } = props;

  function changeSort(field: string): void {
    if (onSortChange !== undefined) {
      onSortChange(field);
    }
  }

  return (
    <TableHead>
      <TableRow>
        {headerCells.map((cell: TableConfigCells) => (
          <TableCell
            align={cell.align}
            component={cell.component}
            scope={cell.scope}
            key={cell.id}
            sortDirection={orderField === cell.id ? orderBy : false}
          >
            <TableSortLabel
              active={orderField === cell.id}
              direction={orderField === cell.id ? orderBy : "asc"}
              onClick={() => changeSort(cell.id)}
            >
              {cell.title}

              {orderField === cell.id ? (
                <span className="w-px h-px -m-px overflow-hidden p-0 absolute border-0 ">
                  {orderBy === "desc"
                    ? "sorted descending"
                    : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

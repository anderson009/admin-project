import { TableConfigCells } from "../../../components/dinamyc-table";
import { movements } from "../../../models/Movements";

export const headerCells = (
  actionsTable: () => JSX.Element
): TableConfigCells[] => {
  return [
    { style: 1, id: 'acciones', title: '', value: actionsTable },

    {
      style: 900,
      align: " left",
      scope: "row",
      component: "th",
      id: "concepto",
      title: "Concepto",
      value: (row: movements) => row.concepto,
    },

    {
      align: "right",
      id: "fecha",
      title: "Fecha y hora",
      value: (row: movements) => row.fecha,
    },
    {
      align: "right",
      id: "totals",
      title: "totals",
      value: (row: movements) => row.totals,
    },
    {
      align: "right",
      id: "metodoDePago",
      title: "Medio de Pago",
      value: (row: movements) => row.metodoDePago,
    },
  ];
};

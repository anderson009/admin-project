import { ResponsePagination } from "../../models/response-pagination";
import { HttpClient } from "../http-client/axios-client";
import * as qs from "qs";

async function getMovements(
  params?: Record<string, string>
): Promise<ResponsePagination<any>> {
  const query = qs.stringify(params);
  const result = await HttpClient.get(`api/sales?${query}`);
  return result.data;
}

const MovementsService = {
  getMovements,
};

export { MovementsService };

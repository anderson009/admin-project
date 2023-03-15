import { ResponsePagination } from '../../models/response-pagination';
import { HttpClient } from '../http-client/axios-client';
import * as qs from 'qs';


async function getProducts(params?: Record<string, string>): Promise<ResponsePagination<any>> {
  const query = qs.stringify(params);
  const result = await HttpClient.get(`api/products?${query}`);
  return result.data;
}

const ProductsService = {
    getProducts
};

export { ProductsService };

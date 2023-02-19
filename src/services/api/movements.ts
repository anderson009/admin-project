import { HttpClient } from '../http-client/axios-client';

async function getMovements(): Promise<any> {
  const result = await HttpClient.get('api/sales');
  return result.data;
}

const MovementsService = {
    getMovements
};

export { MovementsService };

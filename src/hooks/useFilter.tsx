/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useState } from 'react';

const useFilter = () => {
  const [filters, setFilters] = useState<Record<string, any>>({});

  const onChangeFilter = (data: Record<string, string | number | boolean>): void => {
    if (Object.keys(data).length === 0 && Object.keys(filters).length === 0) return;
    setFilters(data);
  };

  return {
    filters,
    onChangeFilter,
  };
};

export default useFilter;

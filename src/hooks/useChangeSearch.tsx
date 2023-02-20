/* eslint-disable @typescript-eslint/explicit-function-return-type */
import debounce from 'lodash.debounce';
import React, { useMemo, useState } from 'react';

const useChangeSearch = (
  callback?: () => void
): {
  textSearch: string;
  onChangeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setTextSearch: React.Dispatch<React.SetStateAction<string>>;
} => {
  const [textSearch, setTextSearch] = useState('');

  const onChangeSearch = useMemo(
    () =>
      debounce((e: React.ChangeEvent<HTMLInputElement>) => {
        setTextSearch(e.target.value);
        if (callback != null) {
          callback();
        }
      }, 300),
    []
  );

  return { textSearch, onChangeSearch, setTextSearch };
};

export default useChangeSearch;

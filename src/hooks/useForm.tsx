import { ChangeEvent, useState } from 'react';

const useForm = <T extends Object>(): {
  state: T;
  setState: React.Dispatch<React.SetStateAction<T>>;
  hmdleChange: ({ target }: ChangeEvent<HTMLInputElement>) => void;
} => {
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const [state, setState] = useState<T>({} as T);

  const hmdleChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = target;

    setState({
      ...state,
      [name]: value,
    });
  };

  return { state, setState, hmdleChange };
};

export default useForm;

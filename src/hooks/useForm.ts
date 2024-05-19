import type { ChangeEvent } from "react";
import { useState } from "react";

type UseFormOutput<T> = T & {
  formState: T;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onResetForm: () => void;
};

export const useForm = <T = NonNullable<unknown>>(
  initialForm: T,
): UseFormOutput<T> => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = (): void => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};

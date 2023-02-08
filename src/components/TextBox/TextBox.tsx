import React, { FC } from 'react';
import { TextInput } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form/lib/types';
import { FormValues } from '@/types';

type Props = {
  form: UseFormReturnType<FormValues, (values: FormValues) => FormValues>;
  id: keyof FormValues;
  placeholder?: string;
  label?: string;
  description?: string;
  withAsterisk?: boolean;
};

export const TextBox: FC<Props> = ({
  form,
  id,
  placeholder = 'placeholder',
  label = 'label',
  description = 'description',
  withAsterisk = false,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      label={label}
      description={description}
      withAsterisk={withAsterisk}
      {...form.getInputProps(id)}
    />
  );
};

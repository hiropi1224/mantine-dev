import React, { FC } from 'react';
import { Checkbox } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { FormValues } from '@/types';

type Props = {
  form: UseFormReturnType<FormValues, (values: FormValues) => FormValues>;
  id: keyof FormValues;
  label?: string;
};

export const Check: FC<Props> = ({ form, id, label = 'label' }) => {
  return (
    <>
      <Checkbox label={label} {...form.getInputProps(id)} />
    </>
  );
};

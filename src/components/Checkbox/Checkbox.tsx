import React, { FC, memo } from 'react';
import { Checkbox } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { FormValues } from '@/types';

type Props = {
  form: UseFormReturnType<FormValues, (values: FormValues) => FormValues>;
  id: string;
  label?: string;
};
const CheckMemo: FC<Props> = ({ form, id, label = 'label' }) => {
  return (
    <>
      <Checkbox label={label} {...form.getInputProps(id)} />
    </>
  );
};

export const Check = memo(CheckMemo);

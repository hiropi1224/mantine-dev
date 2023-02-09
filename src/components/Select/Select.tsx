import React, { FC, memo } from 'react';
import { Select } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { FormValues } from '@/types';

type Props = {
  placeholder?: string;
  label?: string;
  form: UseFormReturnType<FormValues, (values: FormValues) => FormValues>;
  id: string;
};

const SelectBoxMemo: FC<Props> = ({
  placeholder = 'Pick one',
  label = 'Your favorite framework/library',
  form,
  id,
}) => {
  return (
    <Select
      label={label}
      placeholder={placeholder}
      data={[
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'svelte', label: 'Svelte' },
        { value: 'vue', label: 'Vue' },
      ]}
      {...form.getInputProps(id)}
    />
  );
};

export const SelectBox = memo(SelectBoxMemo);

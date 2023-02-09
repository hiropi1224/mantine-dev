import React, { FC, memo } from 'react';
import { TextInput } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form/lib/types';
import { FormValues } from '@/types';

type Props = {
  form: UseFormReturnType<FormValues, (values: FormValues) => FormValues>;
  id: string;
  placeholder?: string;
  label?: string;
  description?: string;
  withAsterisk?: boolean;
};

const TextBoxMemo: FC<Props> = ({
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

export const TextBox = memo(TextBoxMemo);

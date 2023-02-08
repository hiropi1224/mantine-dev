import React, { FC } from 'react';
import { Radio } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { FormValues } from '@/types';

type Content = { value: string; label: string };
type Props = {
  name?: string;
  label?: string;
  description?: string;
  withAsterisk?: boolean;
  contents: Content[];
  form: UseFormReturnType<FormValues, (values: FormValues) => FormValues>;
  id: keyof FormValues;
};

export const RadioGroup: FC<Props> = ({
  contents,
  form,
  id,
  name = 'radio',
  label = 'label',
  description = 'description',
  withAsterisk = false,
}) => {
  return (
    <Radio.Group
      name={name}
      label={label}
      description={description}
      withAsterisk={withAsterisk}
      {...form.getInputProps(id)}
    >
      {contents.map((content, i) => (
        <Radio key={i} label={content.label} value={content.value} />
      ))}
    </Radio.Group>
  );
};

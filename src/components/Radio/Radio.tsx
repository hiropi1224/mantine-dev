import React, { FC, memo } from 'react';
import { Radio } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { FormValues } from '@/types';

type Content = { value: string; label: string };
type Props = {
  name?: string;
  label?: string;
  description?: string;
  withAsterisk?: boolean;
  contents?: Content[];
  form: UseFormReturnType<FormValues, (values: FormValues) => FormValues>;
  id: string;
};

const RadioGroupMemo: FC<Props> = ({
  form,
  id,
  name = 'radio',
  label = 'label',
  description = 'description',
  withAsterisk = false,
  contents = [
    { value: '1', label: 'React' },
    { value: '2', label: 'Vue' },
    { value: '3', label: 'Angular' },
  ],
}) => {
  return (
    <Radio.Group
      name={name}
      label={label}
      description={description}
      withAsterisk={withAsterisk}
      {...form.getInputProps(id)}
    >
      {contents!.map((content, i) => (
        <Radio key={i} label={content.label} value={content.value} />
      ))}
    </Radio.Group>
  );
};

export const RadioGroup = memo(RadioGroupMemo);

import React, { FC } from 'react';
import { Space } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { FormValues } from '@/types';
import { Check } from '@/components/Checkbox';
import { RadioGroup } from '@/components/Radio';
import { SelectBox } from '@/components/Select';
import { TextBox } from '@/components/TextBox';

type Props = {
  code:
    | 'INPUT_TYPE_CHECK_BOX'
    | 'INPUT_TYPE_TEXTBOX_1'
    | 'INPUT_TYPE_RADIO'
    | 'INPUT_TYPE_SELECT_BOX';
  form: UseFormReturnType<FormValues, (values: FormValues) => FormValues>;
  id: string;
  label: string;
};

const inputType = {
  INPUT_TYPE_CHECK_BOX: Check,
  INPUT_TYPE_TEXTBOX_1: TextBox,
  INPUT_TYPE_RADIO: RadioGroup,
  INPUT_TYPE_SELECT_BOX: SelectBox,
};

export const FormSelector: FC<Props> = ({ code, form, id, label }) => {
  const Component = inputType[code];

  return (
    <>
      <Space h='lg' />
      <Component form={form} id={id} label={label} />
    </>
  );
};

import React, { FC } from 'react';
import { Button } from '@mantine/core';
import { useCustomForm } from '@/hooks/useCustomForm';
import { Check } from '@/components/Checkbox';
import { RadioGroup } from '@/components/Radio';
import { SelectBox } from '@/components/Select';
import { TextBox } from '@/components/TextBox';

const contents = [
  { value: '1', label: 'React' },
  { value: '2', label: 'Vue' },
  { value: '3', label: 'Angular' },
];

export const CustomForm: FC = () => {
  const { useForm, FormProvider } = useCustomForm();

  const form = useForm({
    initialValues: {
      name: '',
      radio: '1',
      check: false,
      select: '1',
    },
  });

  return (
    <FormProvider form={form}>
      <form
        onSubmit={form.onSubmit((value) => {
          // eslint-disable-next-line no-console
          console.log(value, 'submit');
        })}
      >
        <TextBox form={form} id='name' />

        <RadioGroup contents={contents} form={form} id='radio' />

        <Check form={form} id='check' />

        <SelectBox form={form} id='select' />

        <Button type='submit'>submit</Button>
      </form>
    </FormProvider>
  );
};

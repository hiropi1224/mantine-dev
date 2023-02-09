import { FC } from 'react';
import { createFormContext, UseFormReturnType } from '@mantine/form';
import { UseForm } from '@mantine/form/lib/types';
import { FormValues } from '@/types';
import { FormProviderProps } from '@mantine/form/lib/FormProvider/FormProvider';

const [FormProvider, useFormContext, useForm] = createFormContext<FormValues>();

export const useCustomForm = (): {
  readonly FormProvider: FC<
    FormProviderProps<UseFormReturnType<any, (values: any) => any>>
  >;
  readonly useFormContext: () => UseFormReturnType<any>;
  readonly useForm: UseForm<any>;
} => {
  return { FormProvider, useFormContext, useForm } as const;
};

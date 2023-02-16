import React, { FC, useState } from 'react';
import { Button } from '@mantine/core';
import { FormValidateInput } from '@mantine/form/lib/types';
// eslint-disable-next-line import/extensions
import data from '@/data/question.json';
import { useCustomForm } from '@/hooks/useCustomForm';
import { FormValues, InputTypeCode } from '@/types';
import { createInitValue } from '@/utils/createInitValue';
import { createValidate } from '@/utils/createValidate';
import { isEmpty } from '@/utils/isEmptyObj';
import { FormBase } from '@/components/FormBase';
import { FormSelector } from '@/components/FormSelector/FormSelector';

export const CustomForm: FC = () => {
  const { useForm, FormProvider } = useCustomForm();
  const [initialValues, setInitialValues] = useState({});

  const form = useForm({
    validateInputOnChange: true,
    initialValues: {
      ...initialValues,
    },
    validate: { ...(createValidate(data) as FormValidateInput<FormValues>) },
  });

  const onClick = () => {
    setInitialValues(createInitValue(data));
  };

  if (isEmpty(initialValues))
    return (
      <div>
        <Button onClick={onClick}>set value</Button>
      </div>
    );

  return (
    <>
      <Button onClick={() => setInitialValues({})}>reset</Button>

      <FormProvider form={form}>
        <form
          onSubmit={form.onSubmit((value) => {
            // eslint-disable-next-line no-console
            console.log(value, 'submit');
          })}
        >
          {data.entryQuestions.map((question) => (
            <FormBase
              key={question.entryQuestionId}
              title={question.questionTitle}
            >
              <FormSelector
                code={question.entryChoices[0].inputTypeCode as InputTypeCode}
                id={question.entryQuestionId}
                form={form}
                label={question.questionText}
              />
            </FormBase>
          ))}

          <Button type='submit'>submit</Button>
        </form>
      </FormProvider>
    </>
  );
};

import React, { FC, useState } from 'react';
import { Button } from '@mantine/core';
// eslint-disable-next-line import/extensions
import data from '@/data/question.json';
import { useCustomForm } from '@/hooks/useCustomForm';
import { FormBase } from '@/components/FormBase';
import { FormSelector } from '@/components/FormSelector/FormSelector';

export const CustomForm: FC = () => {
  const { useForm, FormProvider } = useCustomForm();

  const [initialValues, setInitialValues] = useState({});
  const returnValue = (code: string) => {
    switch (code) {
      case 'INPUT_TYPE_CHECK_BOX':
        return false;
        break;
      case 'INPUT_TYPE_TEXTBOX_1':
        return '';
        break;
      case 'INPUT_TYPE_RADIO':
        return '1';
        break;
      case 'INPUT_TYPE_SELECT_BOX':
        return '1';
        break;
      default:
        return '';
        break;
    }
  };
  const isEmpty = (obj: Record<string, never>) => {
    return Object.keys(obj).length === 0;
  };

  const convert = () => {
    const keys = data.entryQuestions.map((question) => {
      return question.entryQuestionId;
    });
    const values = data.entryQuestions.map((question) => {
      return returnValue(question.entryChoices[0].inputTypeCode);
    });
    const obj = keys.reduce((acc: any, key, index) => {
      acc[key] = values[index];

      return acc;
    }, {});

    return obj;
  };

  const form = useForm({
    initialValues: {
      ...initialValues,
    },
  });

  if (isEmpty(initialValues))
    return (
      <div>
        <Button onClick={() => setInitialValues(convert())}>set value</Button>
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
                code={question.entryChoices[0].inputTypeCode}
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

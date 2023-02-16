import React, { FC, useState } from 'react';
import { Button } from '@mantine/core';
import { isEmail } from '@mantine/form';
// eslint-disable-next-line import/extensions
import data from '@/data/question.json';
import { useCustomForm } from '@/hooks/useCustomForm';
import { InputTypeCode } from '@/types';
import { FormBase } from '@/components/FormBase';
import { FormSelector } from '@/components/FormSelector/FormSelector';

export const CustomForm: FC = () => {
  const { useForm, FormProvider } = useCustomForm();

  const [initialValues, setInitialValues] = useState({});

  // inputTypeCodeに応じた初期値を返す
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

  // データからバリデーション用関数作成
  const returnValidate = (code: string) => {
    switch (code) {
      case 'NUMBER':
        return (value: string) => (value?.length < 8 ? '8文字未満' : null);
        break;
      case 'EMAIL':
        return isEmail('Invalid email');
        break;
      case 'STRING':
        return (value: string) => (value?.length < 2 ? '2文字未満' : null);
        break;
      default:
        return '';
        break;
    }
  };

  // オブジェクトの空判定用
  const isEmpty = (obj: Record<string, never>) => {
    return Object.keys(obj).length === 0;
  };

  // useFormに渡す初期値作成
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

  // useFormに渡すバリデーションオブジェクト作成
  const convertValidate = () => {
    const keys = data.entryQuestions.map((question) => {
      return question.entryQuestionId;
    });
    const values = data.entryQuestions.map((question) => {
      return returnValidate(question.entryChoices[0].validateCheckTypeCode);
    });
    const obj = keys.reduce((acc: any, key, index) => {
      acc[key] = values[index];

      return acc;
    }, {});

    return obj;
  };

  const form = useForm({
    validateInputOnChange: true,
    initialValues: {
      ...initialValues,
    },
    validate: { ...convertValidate() },
  });

  const onClick = () => {
    setInitialValues(convert());
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

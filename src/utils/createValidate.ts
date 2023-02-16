import { isEmail } from '@mantine/form';
import { EntryQuestions, ValidateType } from '@/types';

// useFormに渡すバリデーションオブジェクト作成
export const createValidate = (
  data: EntryQuestions
): {
  [key: string]: ValidateType;
} => {
  const keys = data.entryQuestions.map((question) => {
    return question.entryQuestionId;
  });
  const values: ValidateType[] = data.entryQuestions.map((question) => {
    return returnValidate(question.entryChoices[0].validateCheckTypeCode);
  });
  const obj: { [key: string]: ValidateType } = keys.reduce(
    (acc: { [key: string]: ValidateType }, key: string, index: number) => {
      acc[key] = values[index];

      return acc;
    },
    {}
  );

  return obj;
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

import { EntryQuestions, InitValueType } from '@/types';

// useFormに渡す初期値作成
export const createInitValue = (
  data: EntryQuestions
): {
  [key: string]: InitValueType;
} => {
  const keys = data.entryQuestions.map((question) => {
    return question.entryQuestionId;
  });
  const values: InitValueType[] = data.entryQuestions.map((question) => {
    return returnValue(question.entryChoices[0].inputTypeCode);
  });
  const obj: { [key: string]: InitValueType } = keys.reduce(
    (acc: { [key: string]: InitValueType }, key, index) => {
      acc[key] = values[index];

      return acc;
    },
    {}
  );

  return obj;
};

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

import { ReactElement, JSXElementConstructor, ReactFragment } from 'react';

export type FormValues = {
  [key: string]: InitValueType | ValidateType;
};

export type InitValueType = false | '' | '1';

export type ValidateType =
  | ''
  | ((value: string) => '8文字未満' | null)
  | ((
      value: unknown
    ) =>
      | string
      | number
      | true
      | ReactElement<any, string | JSXElementConstructor<any>>
      | ReactFragment)
  | ((value: string) => '2文字未満' | null);

export type InputTypeCode =
  | 'INPUT_TYPE_CHECK_BOX'
  | 'INPUT_TYPE_TEXTBOX_1'
  | 'INPUT_TYPE_RADIO'
  | 'INPUT_TYPE_SELECT_BOX';

export type EntryQuestions = {
  entryQuestions: EntryQuestion[];
};

export type EntryQuestion = {
  entryQuestionId: string;
  questionTitle: string;
  questionText: string;
  isRequired: boolean;
  entryChoices: EntryChoice[];
};

export type EntryChoice = {
  entryChoiceId: string;
  choiceTitle: string;
  inputTypeCode: string;
  validateCheckTypeCode: string;
};

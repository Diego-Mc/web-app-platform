import {
  CheckboxProps,
  NumberInputProps,
  RadioProps,
  SelectProps,
  TextareaProps,
  TextInputProps,
} from '@mantine/core'

type BaseInput<Props> = {
  props: Props & { label: string }
}

type FormInputText = BaseInput<TextInputProps> & {
  type: 'text'
}

type FormInputNumber = BaseInput<NumberInputProps> & {
  type: 'number'
}

type FormInputSelect = BaseInput<SelectProps> & {
  type: 'select'
}

type FormInputCheckbox = BaseInput<CheckboxProps> & {
  type: 'checkbox'
}

type FormInputRadio = BaseInput<RadioProps> & {
  type: 'radio'
}

type FormInputTextarea = BaseInput<TextareaProps> & {
  type: 'textarea'
}

export type WapFormData<WapDataKeys extends string> = Record<
  WapDataKeys,
  | FormInputText
  | FormInputNumber
  | FormInputSelect
  | FormInputCheckbox
  | FormInputRadio
  | FormInputTextarea
>

type TableColumn<WapDataKeys extends string> = {
  key: WapDataKeys
  label: string
}
type TableRow<WapDataKeys extends string> = Record<WapDataKeys, string>
export type WapTableData<WapDataKeys extends string> = {
  columns: TableColumn<WapDataKeys>[]
  rows: TableRow<WapDataKeys>[]
}

type LogPayload = {
  message: string
}

type NotificationPayload = {
  title: string
  message: string
  color: 'green' | 'red' | 'yellow'
}

type LogAction = {
  type: 'log'
  payload: LogPayload
}

type NotificationAction = {
  type: 'notification'
  payload: NotificationPayload
}

export type WapAction = Array<LogAction | NotificationAction>

export type WapData<WapDataKeys extends string> = {
  form: WapFormData<WapDataKeys>
  table: WapTableData<WapDataKeys>
  actions: WapAction
}

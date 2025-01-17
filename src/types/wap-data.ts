type BaseInput = {
  label: string
}

type FormInputText = BaseInput & {
  type: 'text'
}

type FormInputNumber = BaseInput & {
  type: 'number'
}

type FormInputSelect = BaseInput & {
  type: 'select'
  options: string[]
}

type FormInputCheckbox = BaseInput & {
  type: 'checkbox'
  options: string[]
}

type FormInputRadio = BaseInput & {
  type: 'radio'
  options: string[]
}

type FormInputTextarea = BaseInput & {
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

type TableRow<WapDataKeys extends string> = Record<WapDataKeys, string>
export type WapTableData<WapDataKeys extends string> = TableRow<WapDataKeys>[]

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

// type WapDataKeys = 'name' | 'description' | 'price' | 'quantity'

type FormInputType =
  | 'text'
  | 'number'
  | 'select'
  | 'checkbox'
  | 'radio'
  | 'textarea'
export type WapFormData<WapDataKeys extends string> = Record<
  WapDataKeys,
  FormInputType
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

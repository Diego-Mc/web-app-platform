import { WapFormData } from '@/types/wap-data'
import { entriesOf } from '@/utils/entiresOf'
import {
  Checkbox,
  NumberInput,
  Radio,
  Select,
  Stack,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core'

const renderComponent = (
  input: WapFormData<string>[number],
  key: string | number,
) => {
  switch (input.type) {
    case 'text':
      return <TextInput key={key} {...input.props} />
    case 'number':
      return <NumberInput key={key} {...input.props} />
    case 'select':
      return <Select key={key} {...input.props} />
    case 'checkbox':
      return <Checkbox key={key} {...input.props} />
    case 'radio':
      return <Radio key={key} {...input.props} />
    case 'textarea':
      return <Textarea key={key} {...input.props} />
    default:
      return <TextInput key={key} />
  }
}

type Props<T extends string> = {
  data: WapFormData<T>
}

export function WapForm<T extends string>(props: Props<T>) {
  const { data } = props

  return (
    <Stack>
      <Title order={2}>Form</Title>
      {entriesOf(data).map(([key, value]) => renderComponent(value, key))}
    </Stack>
  )
}

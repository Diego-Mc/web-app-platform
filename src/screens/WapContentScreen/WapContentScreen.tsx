import { WapActions } from '@/components/WapActions/WapActions'
import { WapForm } from '@/components/WapForm/WapForm'
import { WapTable } from '@/components/WapTable/WapTable'
import { WapData } from '@/types/wap-data'
import { Accordion } from '@mantine/core'
import { IconForms, IconLocation, IconTable } from '@tabler/icons-react'

type Props<T extends string> = {
  data: WapData<T>
}

export function WapContentScreen<T extends string>(props: Props<T>) {
  const { data } = props

  return (
    <>
      <Accordion
        variant="separated"
        multiple
        defaultValue={['form', 'table', 'actions']}
      >
        <Accordion.Item key="form" value="form">
          <Accordion.Control icon={<IconForms />}>Form</Accordion.Control>
          <Accordion.Panel>{<WapForm data={data.form} />}</Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item key="table" value="table">
          <Accordion.Control icon={<IconTable />}>Table</Accordion.Control>
          <Accordion.Panel>{<WapTable data={data.table} />}</Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item key="actions" value="actions">
          <Accordion.Control icon={<IconLocation />}>Actions</Accordion.Control>
          <Accordion.Panel>
            {<WapActions data={data.actions} />}
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </>
  )
}

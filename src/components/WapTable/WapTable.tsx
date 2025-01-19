import { WapTableData } from '@/types/wap-data'
import { Stack } from '@mantine/core'
import { Table } from '@mantine/core'
import { useStyles } from './useStyles'

type Props<T extends string> = {
  data: WapTableData<T>
}

export function WapTable<T extends string>(props: Props<T>) {
  const { data } = props

  const { classes } = useStyles()

  return (
    <Stack>
      <Table.ScrollContainer minWidth={600}>
        <Table
          highlightOnHover
          withTableBorder
          withColumnBorders
          className={classes.table}
        >
          <Table.Thead>
            <Table.Tr>
              {data.columns.map((column) => (
                <Table.Th key={column.key}>{column.label}</Table.Th>
              ))}
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {data.rows.map((row, index) => (
              <Table.Tr key={index}>
                {data.columns.map((column) => (
                  <Table.Td key={row[column.key]}>{row[column.key]}</Table.Td>
                ))}
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </Stack>
  )
}

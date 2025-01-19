import { WapTableData } from '@/types/wap-data'
import { Flex, Stack } from '@mantine/core'
import { Table } from '@mantine/core'
import { useStyles } from './useStyles'
import { flexRender } from '@tanstack/react-table'
import { IconSortAscending, IconSortDescending } from '@tabler/icons-react'
import { useTable } from './useTable'

type Props<T extends string> = {
  data: WapTableData<T>
}

export function WapTable<T extends string>(props: Props<T>) {
  const { classes } = useStyles()

  const table = useTable(props)

  return (
    <Stack>
      <Table.ScrollContainer minWidth={600}>
        <Table highlightOnHover withTableBorder withColumnBorders>
          <Table.Thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <Table.Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <Table.Th
                    onClick={header.column.getToggleSortingHandler()}
                    key={header.id}
                    className={classes.th}
                  >
                    <Flex align="center">
                      {{
                        asc: <IconSortAscending size="1.2em" />,
                        desc: <IconSortDescending size="1.2em" />,
                      }[header.column.getIsSorted() as string] ?? null}
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                    </Flex>
                  </Table.Th>
                ))}
              </Table.Tr>
            ))}
          </Table.Thead>
          <Table.Tbody>
            {table.getRowModel().rows.map((row) => (
              <Table.Tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <Table.Td key={cell.id} className={classes.td}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Table.Td>
                ))}
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </Stack>
  )
}

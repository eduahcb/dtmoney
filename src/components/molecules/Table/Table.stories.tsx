import React, { ReactElement } from 'react'

import { Table } from 'components/molecules/Table'

export default {
  title: 'Components/Table',
  component: Table
}

export const usage = (): ReactElement => (
  <>
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Th>Linguagem</Table.Th>
          <Table.Th>Nível</Table.Th>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Td>Javascript</Table.Td>
          <Table.Td>avançado</Table.Td>
        </Table.Row>
      </Table.Body>
    </Table>
  </>
)

import React from 'react';
import { Table, Button } from 'rsuite';

const { Column, HeaderCell, Cell } = Table;

const data = [
  { id: 1, firstName: 'John', lastName: 'Doe', gender: 'Male', age: 30, postcode: '12345', email: 'john@example.com' },
  { id: 2, firstName: 'Jane', lastName: 'Doe', gender: 'Female', age: 28, postcode: '67890', email: 'jane@example.com' },
  { id: 1, firstName: 'John', lastName: 'Doe', gender: 'Male', age: 30, postcode: '12345', email: 'john@example.com' },
  { id: 2, firstName: 'Jane', lastName: 'Doe', gender: 'Female', age: 28, postcode: '67890', email: 'jane@example.com' },
];

const CustomTable = () => {
  return (
    <Table
      height={400}
      data={data}
      onRowClick={rowData => {
        console.log(rowData);
      }}
    >
      <Column width={60} align="center" fixed>
        <HeaderCell>Id</HeaderCell>
        <Cell dataKey="id" />
      </Column>

      <Column width={150}>
        <HeaderCell>First Name</HeaderCell>
        <Cell dataKey="firstName" />
      </Column>

      <Column width={150}>
        <HeaderCell>Last Name</HeaderCell>
        <Cell dataKey="lastName" />
      </Column>

      <Column width={100}>
        <HeaderCell>Gender</HeaderCell>
        <Cell dataKey="gender" />
      </Column>

      <Column width={100}>
        <HeaderCell>Age</HeaderCell>
        <Cell dataKey="age" />
      </Column>

      <Column width={150}>
        <HeaderCell>Postcode</HeaderCell>
        <Cell dataKey="postcode" />
      </Column>

      <Column width={300}>
        <HeaderCell>Email</HeaderCell>
        <Cell dataKey="email" />
      </Column>

      <Column width={80} fixed="right">
        <HeaderCell>...</HeaderCell>

        <Cell style={{ padding: '6px' }}>
          {rowData => (
            <Button appearance="link" onClick={() => alert(`id:${rowData.id}`)}>
              Edit
            </Button>
          )}
        </Cell>
        
      </Column>
    </Table>
  );
};

export default CustomTable;

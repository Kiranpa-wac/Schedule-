import React from 'react'
import Datatable from './Datatable';
const ReactTable = () => {
    const userData = [
        { id: 1, name: "Alice", email: "alice@example.com", age: 28 },
        { id: 2, name: "Bob", email: "bob@example.com", age: 35 },
        { id: 3, name: "Charlie", email: "charlie@example.com", age: 22 },
        { id: 4, name: "David", email: "david@example.com", age: 40 },
        { id: 5, name: "Eve", email: "eve@example.com", age: 29 },
        { id: 6, name: "Frank", email: "frank@example.com", age: 33 },
        { id: 7, name: "Grace", email: "grace@example.com", age: 27 },
        { id: 8, name: "Hank", email: "hank@example.com", age: 31 },
        { id: 9, name: "Ivy", email: "ivy@example.com", age: 26 },
        { id: 10, name: "Jack", email: "jack@example.com", age: 32 },
        { id: 11, name: "Kara", email: "kara@example.com", age: 30 },
        { id: 12, name: "Leo", email: "leo@example.com", age: 25 },
        { id: 13, name: "Mona", email: "mona@example.com", age: 34 },
        { id: 14, name: "Nick", email: "nick@example.com", age: 23 },
        { id: 15, name: "Olivia", email: "olivia@example.com", age: 37 },
        { id: 16, name: "Paul", email: "paul@example.com", age: 24 },
        { id: 17, name: "Quincy", email: "quincy@example.com", age: 39 },
        { id: 18, name: "Rachel", email: "rachel@example.com", age: 21 },
        { id: 19, name: "Steve", email: "steve@example.com", age: 36 },
        { id: 20, name: "Tina", email: "tina@example.com", age: 38 },
        { id: 21, name: "Uma", email: "uma@example.com", age: 29 },
        { id: 22, name: "Victor", email: "victor@example.com", age: 33 },
        { id: 23, name: "Wendy", email: "wendy@example.com", age: 27 },
        { id: 24, name: "Xander", email: "xander@example.com", age: 26 },
        { id: 25, name: "Yara", email: "yara@example.com", age: 30 },
        { id: 26, name: "Arun", email: "arun@example.com", age: 37 },

      ];
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Sortable Table with TanStack Table</h1>
      <Datatable data={userData} />
    </div>
  )
}

export default ReactTable

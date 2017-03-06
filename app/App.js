import React from 'react';
import {render} from 'react-dom';
import KanbanBoard from './KanbanBoard';
import KanbanBoardContainer from './KanbanBoardContainer';
// import ContactsAppContainer from './ContactsApp';

// let contacts = [
//     {
//     	"name": "Cassio Zen",
//     	"email": "cassiozen@gmail.com"
//     },
//     {
//     	"name": "Dan Abramov",
//     	"email": "gaearon@somewhere.com"
//     },
//     {
//     	"name": "Pete Hunt",
//     	"email": "floydophone@somewhere.com"
//     },
//     {
//     	"name": "Paul O’Shannessy",
//     	"email": "zpao@somewhere.com"
//     },
//     {
//     	"name": "Ryan Florence",
//     	"email": "rpflorence@somewhere.com"
//     },
//     {
//     	"name": "Sebastian Markbage",
//     	"email": "sebmarkbage@here.com"
//     }
//   ]

// let cardsList = [
//   {
//     id: 1,
//     title: "Read the Book",
//     description: "I should read the **whole** book",
//     color: "#BD8D31",
//     status: "in-progress",
//     tasks: []
//   },
//   {
//     id: 2,
//     title: "Write some code",
//     description: "Code along with the samples in the book. The complete source can be found at [github](https://github.com/pro-react)",
//     color: "#3A7E28",
//     status: "todo",
//     tasks: [
//       {
//         id: 1,
//         name: "ContactList Example",
//         done: true
//       },
//       {
//         id: 2,
//         name: "Kanban Example",
//         done: false
//       },
//       {
//         id: 3,
//         name: "My own experiments",
//         done: false
//       }
//     ]
//   }
// ];

render(<KanbanBoardContainer />, document.getElementById('root'));
// render(<ContactsApp contacts={contacts} />, document.getElementById('root'));
// render(<ContactsAppContainer />, document.getElementById('root'));

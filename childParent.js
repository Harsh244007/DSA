const arr = [
  {
    id: 1,
    name: "A1",
    childs: [
      { id: 1, name: "child-1", type: "A" },
      { id: 2, name: "child-2", type: "B" },
      { id: 3, name: "child-3", type: "B" },
      { id: 4, name: "child-4", type: "A" },
      { id: 5, name: "child-5", type: "A" },
    ],
  },
  {
    id: 2,
    name: "A2",
    childs: [
      { id: 1, name: "child-1", type: "A" },
      { id: 2, name: "child-2", type: "C" },
      { id: 3, name: "child-3", type: "B" },
      { id: 4, name: "child-4", type: "B" },
      { id: 5, name: "child-5", type: "A" },
    ],
  },
  {
    id: 3,
    name: "A3",
    childs: [
      { id: 1, name: "child-1", type: "C" },
      { id: 2, name: "child-2", type: "C" },
      { id: 3, name: "child-3", type: "C" },
      { id: 4, name: "child-4", type: "B" },
      { id: 5, name: "child-5", type: "B" },
    ],
  },
];

console.log(
  arr.map((e) => {
    const newArray = e.childs.find((ei) => ei.type === "A");
    return newArray ? e.id : null;
  })
);

// first of all i am mapping through my child elements and then i am finding if it's child has that elemnt type of 'A'
// if it does then i am returning that child's parent id 

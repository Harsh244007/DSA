const firstArray = [
    { id: 1, description: 'Apple' },
    { id: 2, description: 'Banana' },
    { id: 3, description: 'Orange' }
  ];
  
  const secondArray = [
    { id: 2, quantity: 10 },
    { id: 1, quantity: 5 },
    { id: 4, quantity: 8 }
  ];
  
  const idDescriptionMap = new Map(firstArray.map(item => [item.id, item.description]));
  
  const updatedSecondArray = secondArray.map(item => {
    if (idDescriptionMap.has(item.id)) {
      return { ...item, description: idDescriptionMap.get(item.id) };
    }
    return item;
  });
  
  console.log(updatedSecondArray);
  
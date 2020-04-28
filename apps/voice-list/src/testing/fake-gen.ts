export const generateFakeList = (name: string): List => {
  return {
      name,
      completed: 1,
      pending: 2,
      items: {
        'Fish': true,
        'Eggs': false,
        'Milk': false
    }
  };
}
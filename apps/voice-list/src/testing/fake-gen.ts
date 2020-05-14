export const generateFakeList = (name: string): List => {
  return {
      name,
      completed: 1,
      pending: 2,
      items: {
        'fish': true,
        'eggs': false,
        'milk': false
    }
  };
}
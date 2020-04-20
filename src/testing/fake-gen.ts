export const generateFakeList = (name: string): List => {
    return {
        name,
        completed: 1,
        pending: 3,
        items: [
          {
            name: 'Fish',
            completed: true
          },
          {
            name: 'Eggs',
            completed: false
          },
          {
            name: 'Milk',
            completed: false
          }
        ]
    };
}
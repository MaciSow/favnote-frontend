export const removeItem = (itemType: string, id: string) => ({
  type: 'REMOVE_ITEM',
  payload: {
    itemType,
    id,
  },
});

export const addItem = (itemType: string, itemContent: object) => {
  const getId = () => `
  ${Math.random().toString(36).substr(2, 9)}
  `;

  return {
    type: 'ADD_ITEM',
    payload: {
      itemType,
      item: {
        id: getId(),
        ...itemContent,
      },
    },
  };
};

export const removeItem = (itemType: string, id: string) => ({
  type: 'REMOVE_ITEM',
  payload: {
    itemType,
    id,
  },
});

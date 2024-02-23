import { getQuery } from "h3";
import { del } from "../../lib/firestore";

export default defineEventHandler(async (event) => {
  try {
    const { col, id } = getQuery(event);

    if (typeof col === 'string' && typeof id === 'string') {
      await del(col, id);
      return { result: id }
    } else {
      throw new Error('Invalid collection name');
    }
  } catch (error) {
    console.error('Caught error:', error);
    return { error: error.message };
  }
});
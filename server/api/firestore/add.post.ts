import { getQuery, readBody } from "h3";
import { add } from "../../lib/firestore";

export default defineEventHandler(async (event) => {
  try {
    const { query } = getQuery(event);
    const body = await readBody(event);

    if (!query || !body) {
      throw new Error("Missing query or body");
    }

    const docRef = await add(query.col as string, body);

    return { result: docRef };
  } catch (error) {
    return { error: error.message }
  } 
});


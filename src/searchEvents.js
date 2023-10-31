/** @format */

const apiKey = process.env.REACT_APP_TM_API_KEY;

export const searchEvent = async (entity, filter) => {
  if (entity === null) {
    // error: missing resource value
    console.log("Error: Missing resource value");
    throw new Error("Missing resource value");
  }

  let filterList = "";
  Object.keys(filter).forEach((key) => {
    filterList += `&${key}=${filter[key]}`;
  });

  try {
    const res = await fetch(
      `https://app.ticketmaster.com/discovery/v2/${entity}.json?apikey=${apiKey}${filterList}`
    );
    if (!res.ok) {
      // handle error in the response
      throw new Error(`Error: ${res.status}`);
    }
    const json = await res.json();
      return json._embedded;
  } catch (e) {
    // Fetch API throws an error
    throw new Error(`Error: ${e}`);
  }
};

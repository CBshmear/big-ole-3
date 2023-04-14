export const apikey = "eEWaC4GIndUneCiGtEBgtvwRfDJrPHd2RVmndhQd";

export const searchNationalParks = (selectedLimit) => {
  return fetch(`https://developer.nps.gov/api/v1/campgrounds?thumbnail&api_key=${apikey}&limit=${selectedLimit}" -H "accept: application/json
    `);
};

export const searchNationalParksStateCode = (selectedOption) => {
  return fetch(
    `https://developer.nps.gov/api/v1/campgrounds?thumbnail&api_key=${apikey}&stateCode=${selectedOption}`
  );
};

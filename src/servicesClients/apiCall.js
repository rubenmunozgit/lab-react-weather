const callApi = async url => {
  const apiResponse = await fetch(url);
  return apiResponse.json();
};

export default callApi;

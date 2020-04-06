const callApi = async url => {
  const api_call = await fetch(url);
  return api_call.json();
};

export default callApi;

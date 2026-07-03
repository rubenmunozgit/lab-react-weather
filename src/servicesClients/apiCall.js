const callApi = async (url) => {
  const apiResponse = await fetch(url);
  if (!apiResponse.ok) {
    const text = await apiResponse.text();
    throw new Error(`API error ${apiResponse.status}: ${text}`);
  }
  return apiResponse.json();
};

export default callApi;

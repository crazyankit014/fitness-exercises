export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY ,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': 'a63040e5d5msh83138c81a8dbb28p1f2086jsnbe6d44b73f4e',
    },
  };
  
  export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
  
    return data;
  };
const axios = require('axios');

// Get posts from remote API
module.exports.getPosts = async (req, res) => {
  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        apiKey: '641c015fd5c04f40a5da45096615e6d4',
        country: 'us',
      },
    });
    res.status(200).json({ data: response.data.articles });
  } catch (e) {
    console.log(e);
    res
      .status(501)
      .json({ message: 'Error while trying to get data from API' });
  }
};

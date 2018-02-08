//  Basic Configuration Object
module.exports = {
  ImdbURL: 'http://api.themoviedb.org/3/search/movie?api_key=',
  apiKey: '',
  database: {
    local: 'mongodb://localhost/movie'
  },
  auth: {
		secret: 'movie_app_secret'
	}
};

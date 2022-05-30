import axios from "axios";
const ApiKey = 'api_key=34c87deee135f98fe7a77be6f3027085';

export const apiService = async (urlBeforeKey, serchValue) => {
    const response = await axios(`https://api.themoviedb.org/${urlBeforeKey}${ApiKey}${serchValue}`)
    return response.data;
    
}



//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US  id

//https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>> список самых популярных фильмов на сегодня для создания коллекции на главной странице.

//https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false поиск кинофильма по ключевому слову на странице фильмов.

//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US запрос полной информации о фильме для страницы кинофильма.

//https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US запрос информации о актёрском составе для страницы кинофильма.

//https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1 запрос обзоров для страницы кинофильма.
const API_KEY = process.env.API_KEY;

export default {
    fetchTrending: {
        title: "Trending",
        url: `/trending/all/week?api_key=${API_KEY}&language=en=US`,
    },
    fetchTopRated: {
        title: "Top Rated",
        url: `/movie/top_rated?api_key=${API_KEY}&language=en=US`,
    },
    fetchActionMovies: {
        title: "Action",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    },
    fetchComedyMovies: {
        title: "Comedy",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=25`,
    },
    fetchHorrorMovies: {
        title: "Horror",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    },
    fetchRomanceMovies: {
        title: "Romance",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    },
    fetchMystery: {
        title: "Mystery",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    },
    fetchSciFi: {
        title: "Sci-Fi",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    },
    fetchWestern: {
        title: "Western",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
    },
    fetchAnimationMovies: {
        title: "Animations",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    },
    fetchTV: {
        title: "TV Movies",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
    },
};
    
    // {
    //     title: "Trending",
    //     url: `/trending/all/week?api_key=${API_KEY}&language=en=US`,
    // },
    // {
    //     title: "Top Rated",
    //     url: `/movie/top_rated?api_key=${API_KEY}&language=en=US`,
    // },
    // {
    //     title: "Action",
    //     url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    // },
    // {
    //     title: "Comedy",
    //     url: `/discover/movie?api_key=${API_KEY}&with_genres=25`,
    // },
    // {
    //     title: "Horror",
    //     url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    // },
    // {
    //     title: "Romance",
    //     url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    // },
    // {
    //     title: "Mystery",
    //     url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    // },
    // {
    //     title: "Sci-Fi",
    //     url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    // },
    // {
    //     title: "Western",
    //     url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
    // },
    // {
    //     title: "Animations",
    //     url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    // },
    // {
    //     title: "TV Movies",
    //     url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
    // },
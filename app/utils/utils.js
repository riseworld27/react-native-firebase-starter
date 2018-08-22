
function query({type, url, body, headers}) {
	const query = {
        method: type,
        // headers: headers,
        // body: JSON.stringify(body)
    };

    return fetch(url, query)
        .then((response) => {
            return response;
        }).catch((err) => {
            return err;
    });
}

export const getMovies = () => {
    const url = 'https://tender-mclean-00a2bd.netlify.com/mobile/movies.json';
    return query({type: 'GET', url});
};
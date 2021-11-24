import Image from 'next/image'

function Thumbnail({ result }) {
	console.log(result);
	const BASE_URL = "https://image.tmdb.org/t/p/original/";

	return (
		<div>
			<Image
				layout="responsive"
                src={`${BASE_URL}${result.backdrop_path}`}
				height={1080}
				width={1920}
			/>
            
			<h1>Movies</h1>
		</div>
	);
}

export default Thumbnail;
// src={
// 	`${BASE_URL}${result.backdrop_path || result.poster_path}` ||
	// 	`${BASE_URL}${result.poster_path}`
	// }
import React, {useState, useEffect} from 'react';
import axios from './axios';
import Header from './Header';
import './header.css';

const img_base_path = 'https://image.tmdb.org/t/p/original';

function Banner(props) {
	const [banner, setBanner] = useState({});
	
	useEffect(()=> {
		async function fetchData(){
			const request = await axios.get(props.endpoints);
			const result = request.data.results [Math.floor(Math.random() * request.data.results.length)];
			setBanner(result);
		}
		fetchData();
	},[])

	const background = {
		backgroundImage: `url(${img_base_path + banner.backdrop_path})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center'
	}

	return (
		<div className='head' style={background}>
			<Header />
			<div className='banner_content'>
				<h1>{banner.name || banner.original_title}</h1>
				<div className='cta'>
					<a href="#">My List</a>
					<a href="#">Play Now</a>
				</div>
				<p>{banner.overview}</p>
			</div>
		</div>
	)
}

export default Banner
import React, {useState, useEffect} from 'react';
import axios from './axios';
import './Row.css';


const img_base_path = 'https://image.tmdb.org/t/p/original';

function Row(props) {
	const [movies, setMovies] = useState([]);
	
		useEffect(() => {
			async function fetchData(){
				const response = await axios.get(props.endpoints);
				setMovies(response.data.results);
		}
		fetchData();

		} ,[])
	
	
	
	
	return (
		<div className="row" >
            <h2 className='heading'>{props.heading}</h2>
            <div className='movies_wrapper'>
            	{
            		movies.map((current, index) => {
            			return(
            				<div className='movie_posters' key={index}>
            					<img className={props.isBigger ? 'movie_poster_big' : 'movie_poster'} src={img_base_path + current.poster_path} alt={current.original_title || current.name} />
            				</div>
            			)
            		})
            	}
            </div>
        </div>
	)
}


export default Row;
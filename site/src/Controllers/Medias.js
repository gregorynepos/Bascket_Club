
import { useEffect, useState } from "react";

//affiche tous les médias dans la gallerie

function Medias() {
	const [pictures, setPictures] = useState([]);

	useEffect(() => {
		fetch("/Medias")
			.then((response) => response.json())
			.then((res) => {
				console.log(res);
				setPictures(res);
			})
	}, [])


	return (
		<>
			<div className='medias'>

				<h1>Medias</h1>

				<div className='galery'>



					{pictures.map((pictures, i) => (
						<figure key={i}>

							<img src={pictures.medias} alt={pictures.alt} />

							<figcaption>{pictures.name}</figcaption>

						</figure>
					))}
				</div>

			</div>
		</>
	);
}

export default Medias;
const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		people: [],
		planets: [],
		favoriteCharacters: [],
        favoritePlanets: [],
	  },
	  actions: {
		loadPeople: () => {
			fetch("https://www.swapi.tech/api/people")
			  .then(res => res.json())
			  .then(data => {
				console.log("API response:", data);  
				if (data.results) {
				  const peoplePromises = data.results.map(result =>
					fetch(result.url)
					  .then(res => res.json())
					  .then(detailData => detailData.result)
				  );
				  Promise.all(peoplePromises)
					.then(people => {
					  console.log("Processed people data:", people);  
					  setStore({ people });
					});
				}
			  })
			  .catch(err => console.error("Error fetching people:", err));
		  },
		  loadPlanets: () => {
			fetch("https://www.swapi.tech/api/planets")
				.then(res => res.json())
				.then(data => {
					if (data.results) {
						const planetPromises = data.results.map(result =>
							fetch(result.url)
								.then(res => res.json())
								.then(detailData => detailData.result)
						);
						Promise.all(planetPromises)
							.then(planets => {
								setStore({ planets });
							});
					}
				})
				.catch(err => console.error("Error fetching planets:", err));
		},
		addFavoriteCharacter: (character) => {
			const store = getStore();
			setStore({ favoriteCharacters: [...store.favoriteCharacters, character] });
		},

		removeFavoriteCharacter: (uid) => {
			const store = getStore();
			setStore({ favoriteCharacters: store.favoriteCharacters.filter(fav => fav.uid !== uid) });
		},

		addFavoritePlanet: (planet) => {
			const store = getStore();
			setStore({ favoritePlanets: [...store.favoritePlanets, planet] });
		},

		removeFavoritePlanet: (uid) => {
			const store = getStore();
			setStore({ favoritePlanets: store.favoritePlanets.filter(fav => fav.uid !== uid) });
		},

		  
	  }
	};
  };
  
  export default getState;
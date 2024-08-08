const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		people: [],
		favorites: []
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
		  addFavorite: (character) => {
			const store = getStore();
			if (!store.favorites.find(fav => fav.uid === character.uid)) {
			  setStore({ favorites: [...store.favorites, character] });
			}
		  },
		  removeFavorite: (uid) => {
			const store = getStore();
			setStore({ favorites: store.favorites.filter(fav => fav.uid !== uid) });
		  },
	  }
	};
  };
  
  export default getState;
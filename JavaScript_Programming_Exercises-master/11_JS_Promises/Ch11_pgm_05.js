const countriesAPI = 'https://restcountries.com/v2/all'
const fetchCountriesData = async () => {
    try {
      const response = await fetch(countriesAPI);
      const countries = await response.json();
  
      countries.forEach(country => {
        const { name, capital, languages, population, area } = country;
        const languageNames = languages.map(lang => lang.name).join(', ');
  
        console.log(`Name: ${name}`);
        console.log(`Capital: ${capital}`);
        console.log(`Languages: ${languageNames}`);
        console.log(`Population: ${population}`);
        console.log(`Area: ${area}`);
        console.log('------------------------');
      });
    } catch (error) {
      console.error('Error fetching countries data:', error);
    }
  };
  

  fetchCountriesData();
  

// Read the countries API using fetch and print the name of country, capital, languages, 
// population and area.
const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
const fetchCatWeights = async () => {
  try {
    const response = await fetch(catsAPI);
    const cats = await response.json();

    let totalWeight = 0;
    let catCount = 0;

    cats.forEach(cat => {
      const weightMetric = cat.weight.metric.split(' - ');
      const avgWeight = (parseFloat(weightMetric[0]) + parseFloat(weightMetric[1])) / 2;
      totalWeight += avgWeight;
      catCount++;
    });

    const averageWeight = totalWeight / catCount;
    console.log(`Average Weight of Cats: ${averageWeight.toFixed(2)} kg`);
  } catch (error) {
    console.error('Error fetching cat weights:', error);
  }
};


const fetchLargestCountries = async () => {
  try {
    const response = await fetch(countriesAPI);
    const countries = await response.json();

    const largestCountries = countries
      .sort((a, b) => b.area - a.area)
      .slice(0, 10)
      .map(country => ({
        name: country.name,
        area: country.area,
      }));

    console.log('10 Largest Countries by Area:');
    largestCountries.forEach(country => {
      console.log(`${country.name}: ${country.area} sq km`);
    });
  } catch (error) {
    console.error('Error fetching largest countries:', error);
  }
};


const fetchTotalLanguages = async () => {
  try {
    const response = await fetch(countriesAPI);
    const countries = await response.json();

    const languageSet = new Set();
    countries.forEach(country => {
      country.languages.forEach(language => {
        languageSet.add(language.name);
      });
    });

    console.log(`Total Number of Official Languages: ${languageSet.size}`);
  } catch (error) {
    console.error('Error fetching languages:', error);
  }
};


fetchCatWeights();
fetchLargestCountries();
fetchTotalLanguages();


// Read the cats api and find the average weight of cat in metric unit.
// Read the countries api and find out the 10 largest countries
// Read the countries api and count total number of languages in the world used as officials.
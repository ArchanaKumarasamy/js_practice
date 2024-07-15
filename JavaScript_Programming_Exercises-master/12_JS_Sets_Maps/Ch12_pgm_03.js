
const url = 'https://restcountries.com/v2/all';


const mostSpokenLanguages = async (countries, n) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    
    const languageCount = {};


    data.forEach(country => {
      country.languages.forEach(language => {
        if (languageCount[language.name]) {
          languageCount[language.name]++;
        } else {
          languageCount[language.name] = 1;
        }
      });
    });


    const languageArray = Object.keys(languageCount).map(language => {
      return { [language]: languageCount[language] };
    });


    languageArray.sort((a, b) => {
      const countA = Object.values(a)[0];
      const countB = Object.values(b)[0];
      return countB - countA;
    });


    return languageArray.slice(0, n);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};


mostSpokenLanguages(countries, 10).then(result => console.log(result));
mostSpokenLanguages(countries, 3).then(result => console.log(result));


// How many languages are there in the countries object file.

// *** Use the countries data to find the 10 most spoken languages:


//    // Your output should look like this
//    console.log(mostSpokenLanguages(countries, 10))
//    [
//      { English: 91 },
//      { French: 45 },
//      { Arabic: 25 },
//      { Spanish: 24 },
//      { Russian: 9 },
//      { Portuguese: 9 },
//      { Dutch: 8 },
//      { German: 7 },
//      { Chinese: 5 },
//      { Swahili: 4 },
//      { Serbian: 4 }
//    ]

//   // Your output should look like this
//   console.log(mostSpokenLanguages(countries, 3))
//   [
//   {English:91},
//   {French:45},
//   {Arabic:25}
//   ]
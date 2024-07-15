const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
const fetchCatNames =async() =>{
    try{
        const response =await fetch(catsAPI);
        const cats = await response.json();
        const catNames = cats.map(cat => cat.name);
        console.log(catNames);
    }
    catch(error){
        console.error ('error fetching cat names:',error);
            }
};
fetchCatNames();

// Print out all the cat names in to catNames variable.
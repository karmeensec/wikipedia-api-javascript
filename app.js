const btn = document.querySelector('#submit');
const input = document.querySelector('#input');
const error = document.querySelector('#error');
const results = document.querySelector('#results');


// API params

const endpoint = 'https://en.wikipedia.org/w/api.php?';

const params = {
    action: 'query',
    format: 'json',
    origin: '*',
    prop: 'extracts',
    exchars: '300',
    exintro: true,
    explaintext: true,
    generator: 'search',
    gsrlimit: 30,
}


// Helpers

const disableUI = () => {

    btn.disabled = true;
    input.disabled = true;

}

const enableUI = () => {

    btn.disabled = false;
    input.disabled = false;

}

const clearPrevResults = () => {

    results.innerHTML = '';

}

const checkEmptyInput = (input) => {

    if (!input || input === '') return true;
    else return false;

}


const showError = (error) => {
    error.innerHTML = `‼️ ${error} ‼️`;
};



const showResults = function(results) {

    results.forEach( (result) => {

        results.innerHTML += `
        
            <div id="results" class="results__item">
            
                <a href="https://en.wikipedia.org/?curid=${result.pageId}" target="_blank" class="card animated bounceInUp">
                    <h2 class="results__item__title">${result.title}</h2>
                    <p class="results__item__intro">${result.intro}</p>
                </a>    

            </div>

        `

    } )

};


const gatherData = (pages) => {

    const results =  Object.values(pages).map( (page) => ({

        pageId: page.pageId,
        title: page.title,
        intro: page.extract,

    }));

    showResults(results);

}




const getData = async function() {

   const userInput = input.value;

   if (checkEmptyInput(userInput)) return;

   params.gsrsearch = userInput;
   disableUI();

   try {

    const {data} =  await axios.get(endpoint, {params});

    if (data.error) throw new Error(data.error.info);

    gatherData(data.query.pages);

   } catch (error){
    showError(error);
   } finally {
    enableUI();
   }

}





const keyEvent = function(e) {

    if (e.key === 'Enter') {
        getData();
    }

}


const registerEvents = () => {

    input.addEventListener('keydown', keyEvent);
    btn.addEventListener('click', getData);

}

registerEvents();
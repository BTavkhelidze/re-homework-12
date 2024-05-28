const mainContainer = document.querySelector('.main__container');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

const quoteUrl = 'https://api.quotable.io/random';

const createVisualQuote = (data) => {
  quote.textContent = `"${data.content}"`;
  quote.classList.add('quote');
  mainContainer.appendChild(quote);

  author.textContent = `- ${data.author}`;
  author.classList.add('author');
  mainContainer.appendChild(author);
};

async function getQuote() {
  try {
    const response = await fetch(quoteUrl);
    const data = await response.json();
    createVisualQuote(data);
  } catch (e) {
    console.log(e);
  } finally {
    console.log('finished');
  }
}

getQuote();

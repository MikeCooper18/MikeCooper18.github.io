function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function showEmail()
{
    alert("michael.cooper575@gmail.com")
}


async function homepageHeader()
{
    textToDisplay = "Hello, homepage..."
	text = document.querySelector("#homepageHeader");
    text.innerHTML = ""
	for (let i=0, n=textToDisplay.length; i < n; i++)
  {
  	text.innerHTML = text.innerHTML + textToDisplay[i];
    await sleep(150);
  }
}

async function aboutHeader()
{
    textToDisplay = "Hello, about page..."
	text = document.querySelector("#aboutHeader");
    text.innerHTML = ""
	for (let i=0, n=textToDisplay.length; i < n; i++)
  {
  	text.innerHTML = text.innerHTML + textToDisplay[i];
    await sleep(150);
  }
}

async function educationHeader()
{
    textToDisplay = "Hello, education page..."
	text = document.querySelector("#educationHeader");
    text.innerHTML = ""
	for (let i=0, n=textToDisplay.length; i < n; i++)
  {
  	text.innerHTML = text.innerHTML + textToDisplay[i];
    await sleep(150);
  }
}

async function socialsHeader()
{
    textToDisplay = "Hello, socials page..."
	text = document.querySelector("#socialsHeader");
    text.innerHTML = ""
	for (let i=0, n=textToDisplay.length; i < n; i++)
  {
  	text.innerHTML = text.innerHTML + textToDisplay[i];
    await sleep(150);
  }
}


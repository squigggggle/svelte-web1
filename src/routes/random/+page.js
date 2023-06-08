const BASE_URL = "https://cataas.com";

export async function load(){
    const response = await fetch(`${BASE_URL}/cat?json=true`);    
    const cat = await response.json();
    return {
        status : response.status,   //reads the status from the fetch and returns it as status
        cat: cat.url,               //return the cat image url
        BASE_URL,                   //return the base url to be used in the page
    };
}
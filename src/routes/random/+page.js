const BASE_URL = "https://cataas.com";
export async function load(){
    const response = await fetch(`${BASE_URL}/cat`);
    const cat = await response.json();
    if(cat) {
        console.log(cat);
        return {
            cat,
        };
    }
    return {
        status: 404,
    };
}
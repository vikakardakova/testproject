import fetch from 'node-fetch';

export async function getReqv(url) {
    try {
    let response = await fetch(url);
    let results = await response.json();
    return results;
    } catch (error) {
    console.log(error);
    }
}

export async function postReqv(url, body) {
 try {
    let response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {'Content-Type':'application/json'}
});

const results = await response.json();
return results;
 }
catch (error) {
         console.log(error);
         }
}
export default async function handler(req, res) {
    const url = `https://cms.njwebdeveloper.codes/wp-json/contact-form-7/v1/contact-forms/74/feedback`;

    const jsonData = JSON.parse(req.body);
    let form_data = new FormData();
    for ( let key in jsonData ) {
        form_data.append(key, jsonData[key]);
    }
    const requestOptions = {
        method: 'POST',
        body: form_data
    };
    let response = await fetch(url, requestOptions);
    let data = await response.json();
    console.log(data);
    res.status(200).json({ message: 'Hello from Next.js!' });
}
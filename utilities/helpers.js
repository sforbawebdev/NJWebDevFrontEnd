export const postToCF = async (data) => {
    let form_data = new FormData();
    for ( let key in data ) {
        form_data.append(key, data[key]);
    }
    const requestOptions = {
        method: 'POST',
        body: form_data
    };
    
    let response = await fetch(`${process.env.NEXT_PUBLIC_WP_ENDPOINT}/wp-json/contact-form-7/v1/contact-forms/${process.env.NEXT_PUBLIC_CONTACT_FORM_ID}/feedback`, requestOptions)
    .then((response) => response.json())
    .then((data) => {
        if(data && data?.status === "mail_failed") {
            return data?.status;
        }
        return data;
    })
    .catch((error) => {
        console.error("ERROR: ", error);
        return error;
    })
    return response;
}

export const fontSetter =(name)=>{
    switch(name) {
        case "headless": 
            return ['fa-solid', 'network-wired']           
        case "api": 
            return ['fa-solid', 'server']               
        case "shopify": 
            return ['fab', 'shopify']        
        case "wordpress": 
            return ['fab', 'wordpress']
        case "desktop":
            return ['fas', 'desktop']
        case "mobile-alt":
            return ['fas', 'mobile-alt']            
        case "email":
            return ['far', 'envelope']
        case "twitter":
            return ['fab', 'twitter']   
        case "linkedin":
            return ['fab', 'linkedin']     
        case "upwork":
            return ['fab', 'upwork']   
        case "github":
            return ['fab', 'github']                       
        default: 
            return ['fab', 'wordpress']
    }
}
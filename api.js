// const apiUrl = window.location.href
// const apiReplacedURL = apiUrl.replace('#', '&')
// const apiFinalURL = new URLSearchParams(apiReplacedURL)

// var api_access_token = apiFinalURL.get('access_token')

// var sendData = (userName,email, subject, description)=>{

//     fetch(
//         // Change - Your API here
//         'https://xxqdlcexp8.execute-api.us-east-1.amazonaws.com/test/test-resource', 
//         {
//             method: "POST", 
//             body: JSON.stringify({
//                 "name": userName,
//                 "email": email,
//                 "subject":subject,
//                 "description":description
//             }),
//             headers: {
//                 'Content-Type': 'application/json',
//                 'authentication': api_access_token
//               },
//         }
//     )
//         .then(response => response.json())
//         .then(result => {
//             if(result['statusCode'] == 200){
//                 alert("Successfully Sent the Message")
//             }else{
//                 alert("Error in sending message")
//                 alert(result)
//             }
//         })
//         .catch(error => console.log('error', error));
// }
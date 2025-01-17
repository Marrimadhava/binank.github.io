// Extract tokens from URL
const url = new URL(window.location.href);
const accessToken = url.searchParams.get('access_token');
const idToken = url.searchParams.get('id_token');

if (!accessToken) {
    console.error("Access token not found in URL. Redirecting to home.");
    window.location.href = 'https://marrimadhava.github.io/binank.github.io/';
}

// AWS SDK Configuration
const awsRegion = 'us-east-1';
AWS.config.update({
    region: awsRegion,
    apiVersions: {
        cognitoidentityserviceprovider: '2016-04-18',
    },
});

// Cognito Service Provider
const cognitoServiceProvider = new AWS.CognitoIdentityServiceProvider();

const params = { AccessToken: accessToken };

cognitoServiceProvider.getUser(params, (err, data) => {
    if (err) {
        console.error("Error fetching user:", err);
        window.location.href = 'https://marrimadhava.github.io/binank.github.io/';
    } else {
        console.log("User data:", data);

        let userName = "";
        let userEmail = "";

        // Extract user attributes
        data.UserAttributes.forEach(attribute => {
            if (attribute.Name === 'name') userName = attribute.Value;
            if (attribute.Name === 'email') userEmail = attribute.Value;
        });

        // Update DOM elements safely
        const userNameElement = document.getElementById('userName');
        const userEmailElement = document.getElementById('userEmail');
        const userNameInput = document.getElementById('userNameInput');
        const userEmailInput = document.getElementById('userEmailInput');

        if (userNameElement) userNameElement.textContent = userName;
        if (userEmailElement) userEmailElement.textContent = userEmail;
        if (userNameInput) userNameInput.value = userName;
        if (userEmailInput) userEmailInput.value = userEmail;
    }
});

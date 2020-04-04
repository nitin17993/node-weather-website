const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const message1 = document.querySelector('#message-1');
const message2 = document.querySelector('#message-2');
const message3 = document.querySelector('#message-3');

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const location = search.value;
    message1.textContent = "Loading...";
    message2.textContent = "";
    message3.textContent = "";

    fetch('/weather?address='+ encodeURIComponent(location)).then((response) => {
    response.json().then((data) => {
        if(data.error) {
            // console.log(data.error);
            message1.textContent = data.error;
        }
        else {
            message1.textContent = "Temperature: " + data.temperature + " C";
            message2.textContent = "Humidity: " + data.humidity;
            message3.textContent = "Location: " + data.location;
        }
    })
})
})
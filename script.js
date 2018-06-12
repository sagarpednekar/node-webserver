Window.onload = function () {
    console.log("Script Works fine");
    /*
    The Fetch API provides a fetch() method defined on the window object,
     which you can use to perform requests.
    This method returns a Promise that you can use to retrieve the response of the request.
    The fetch method only has one mandatory argument, 
    which is the URL of the resource you wish to fetch. 
    A very basic example would look something like the following.
     This fetches the top five posts from r/javascript on Reddit:
    */
   fetch('/status').then(function(response){
        response.json().then(function(data) {
            console.log(data);
            document.getElementById('my-name').innerHTML = data['name'];
            document.getElementById('my-status').innerHTML = data['status'];
        })
   });
}

export function render_and_return(template) {
    return fetch_wrapper(template)
        .then(function(body) {
            document.body.innerHTML = body;
        });
}


export function fetch_wrapper(template) {
    return fetch(template)
        .then(function(response) {
            return response.text();
        });
}
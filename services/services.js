let siteTitle = document.getElementById("siteTitle");
let globalNav = document.getElementById("navLinks");
let pageContainer = document.getElementById("container");
export var hamburgerMenu = document.getElementById("hamburgerMenu");

export function loadPage() {
    let hashTag = window.location.hash;
    let pageToLoad = hashTag.replace("#", "");

    function fetchContent(url) {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                pageContainer.innerHTML = data;
            })
            .catch(error => {
                console.error('Error fetching page:', error);
                pageContainer.innerHTML = `<p>Error loading page: ${error.message}</p>`;
            });
    }


    if (pageToLoad == 'home' || pageToLoad == "")
    {
        fetchContent('pages/home.html');
        siteTitle.innerHTML = "Cameron Crosby - Home";
    }
    else
    {
        fetchContent(`pages/${pageToLoad}.html`);
        siteTitle.innerHTML = `Cameron Crosby - ${pageToLoad.charAt(0).toUpperCase() + pageToLoad.slice(1)}`;
    }
}
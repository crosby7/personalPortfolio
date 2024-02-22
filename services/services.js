let globalNav = document.getElementById("navLinks");
export var hamburgerMenu = document.getElementById("hamburgerMenu");
var typingEffect;

export function loadPage() {
    let hashTag = window.location.hash;
    let pageToLoad = hashTag.replace("#", "");


    if (pageToLoad == 'home')
    {
        $.get(`pages/home.html`, function (data) {
            $("#container").html(data);
            initializeTyped();
        });
        $.get(`pages/projects.html`, function (data) {
            $("#container").append(data);
        });
    }
    else if (pageToLoad != "")
    {
        $.get(`pages/${pageToLoad}.html`, function (data) {
            $("#container").html(data);
        })
    }
    else
    {
        $.get(`pages/home.html`, function (data) {
            $("#container").html(data);
            initializeTyped();
        });
        $.get(`pages/projects.html`, function (data) {
            $("#container").append(data);
        });
    }

    if (pageToLoad == "home")
    {
        setTimeout(initializeTyped, 500);
        initializeTyped();
    }
}

function initializeTyped() {
    typingEffect = new Typed(".multiText", {
        strings : ["a programmer", "a developer", "Cameron Crosby"],
        loop : true,
        typeSpeed : 100,
        backSpeed : 80,
        backDelay : 2000
    });
}
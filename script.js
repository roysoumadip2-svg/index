const movies = [
    {
        title: "Big Titty Babe Hailey Rose Gets Fucked Like a Rag Doll by Big Di",
        description: "Friends uncover mysterious secrets in their town.",
        image: "files/videomain.png",
        videoFile: "files/video2.mp4",
        category: "big tits big boobs"
    },
    {
        title: "Big Tit Step Sister Caught Masturbating By StepBrother Gets Crea",
        description: "A criminal mastermind plans the perfect heist.",
        image: "files/image2.png",
        videoFile: "files/video1.mp4",
        category: "big tits big boobs"

    },
    {
        title: "Abigaiil Morris Turns A Hot Girl Hike Into A Wild Out",
        description: "Contestants risk everything for a huge prize.",
        image: "files/image3.png",
        videoFile: "files/video3.mp4",
        category: "big tits big boobs"

    },
    {
        title: "Hotties Hailey Rose And Lily Starfire Get Oiled Up Fo",
        description: "A monster hunter explores a dangerous world.",
        image: "files/image4.png",
        videoFile: "files/video4.mp4",
        category: "big tits big boobs"
    },
    {
        title: "Bang Surprise - Busty Babe Lily Lou Oiled Up Fucked In Both Hole",
        description: "A monster hunter explores a dangerous world.",
        image: "files/image5.png",
        videoFile: "files/video5.mp4",
        category: "big tits big boobs oiled up"

    },
        {
        title: "Bang Surprise - Busty Babe Lily Lou Oiled Up Fucked In Both Hole",
        description: "A monster hunter explores a dangerous world.",
        image: "files/image6.png",
        videoFile: "files/video6.mp4",
        category: "big tits big boobs oiled up"
    },
        {
        title: "Bang Surprise - Busty Babe Lily Lou Oiled Up Fucked In Both Hole",
        description: "A monster hunter explores a dangerous world.",
        image: "files/image7.png",
        videoFile: "files/video7.mp4",
        category: "hardcore"
    },
        {
        title: "Bang Surprise - Busty Babe Lily Lou Oiled Up Fucked In Both Hole",
        description: "A monster hunter explores a dangerous world.",
        image: "files/image8.png",
        videoFile: "files/video8.mp4",
        category: "hardcore"
    },
        {
        title: "Bang Surprise - Busty Babe Lily Lou Oiled Up Fucked In Both Hole",
        description: "A monster hunter explores a dangerous world.",
        image: "files/image9.png",
        videoFile: "files/video9.mp4",
        category: "hardcore"
    },
    {
        title: "Bang Surprise - Busty Babe Lily Lou Oiled Up Fucked In Both Hole",
        description: "A monster hunter explores a dangerous world.",
        image: "files/image10.png",
        videoFile: "files/video10.mp4",
        category: "gangbang"
    },
    {
        title: "Young Women Cheat on Their Boyfriends with 6 Men in a Gangbang F",
        description: "A monster hunter explores a dangerous world.",
        image: "files/image11.png",
        videoFile: "files/video11.mp4",
        category: "gangbang"
    },
    {
        title: "Bang Surprise - Busty Babe Lily Lou Oiled Up Fucked In Both Hole",
        description: "A monster hunter explores a dangerous world.",
        image: "files/image12.png",
        videoFile: "files/video12.mp4",
        category: "gangbang"
    },
    {
        title: "Cum on these oiled up big natural tits - FULL SCENE - Massage Ro",
        description: "A monster hunter explores a dangerous world.",
        image: "files/image13.png",
        videoFile: "files/video13.mp4",
        category: "big tits big boobs oiled up"
    },
    {
        title: "Stepsister came to talk about our relationship...",
        description: "A monster hunter explores a dangerous world.",
        image: "files/image14.png",
        videoFile: "files/video14.mp4",
        category: "big tits big boobs"
    },
    {
        title: "Big-Tit Latina Takes Two Cocks at Once... DP in the Dungeon Till",
        description: "A monster hunter explores a dangerous world.",
        image: "files/image15.png",
        videoFile: "files/video15.mp4",
        category: "gangbang"
    },
    {
        title: "Arielle Aquinas Gets it Rough after Mixed Sex Fight loss to Cody",
        description: "A monster hunter explores a dangerous world.",
        image: "files/image16.png",
        videoFile: "files/video16.mp4",
        category: "www"
    },
    {
        title: "Beauties get covered in whipped cream during a hardcore sex sess",
        description: "A monster hunter explores a dangerous world.",
        image: "files/image17.png",
        videoFile: "files/video17.mp4",
        category: "www"
    },
    {
        title: "Brazzers - Shy Blonde Codi Vore Always Had A Secret Desire For H",
        description: "A monster hunter explores a dangerous world.",
        image: "files/image18.png",
        videoFile: "files/video18.mp4",
        category: "big tits big boobs"
    },
    {
        title: "Brazzers - Van Wylde Is Unable To Resist Codi Vores Huge Tits Fu",
        description: "A monster hunter explores a dangerous world.",
        image: "files/image19.png",
        videoFile: "files/video19.mp4",
        category: "big tits big boobs"
    },
    {
        title: "Brazzers Codi Vores Older Lover Steve Holmes Sneaks Past Her Clu",
        description: "A monster hunter explores a dangerous world.",
        image: "files/image20.png",
        videoFile: "files/video20.mp4",
        category: "big tits big boobs"
    }
];

let currentIndex = 0;
const watchedMovies = new Set();
let slideTimer;

function showMovie(index) {
    currentIndex = index;

    const movie = movies[index];

    document.getElementById("hero").style.backgroundImage = `
        linear-gradient(to right, #000 10%, transparent),
        linear-gradient(to top, #141414, transparent),
        url("${movie.image}")
    `;

    document.getElementById("movieTitle").textContent = movie.title;
    document.getElementById("movieDescription").textContent =
        movie.description;

    document.querySelectorAll(".dot").forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
}

// Use your existing movies array.
// Add a videoFile property to each movie if you
// want to play your own video files.

function playMovie() {
    const movie = movies[currentIndex];

    const details = document.getElementById("movieDetails");

    document.getElementById("detailTitle").textContent =
        movie.title;

    document.getElementById("detailDescription").textContent =
        movie.description;

    details.style.backgroundImage = `
        linear-gradient(to right, #000 10%, rgba(0,0,0,.5)),
        url("${movie.image}")
    `;

    details.style.display = "flex";

    showRelatedMovies(movie);
}

function closeDetails() {
    document.getElementById("movieDetails").style.display = "none";
}

async function playFullScreen() {
    const movie = movies[currentIndex];
    const player = document.getElementById("videoPlayer");
    const video = document.getElementById("movieVideo");

    if (!movie.videoFile) {
        alert("Add a videoFile path to this movie first.");
        return;
    }

    video.src = movie.videoFile;
    player.style.display = "flex";

    try {
        await video.play();

        if (player.requestFullscreen) {
            await player.requestFullscreen();
        }
    } catch (error) {
        console.log("Playback/full-screen error:", error);
        alert("Playback failed. Check your video file path and try again.");
    }
}

async function closePlayer() {
    const video = document.getElementById("movieVideo");
    const player = document.getElementById("videoPlayer");

    video.pause();
    video.removeAttribute("src");
    video.load();

    player.style.display = "none";

    if (document.fullscreenElement) {
        await document.exitFullscreen().catch(() => {});
    }
}

function initSlider() {
    const container = document.getElementById("sliderDots");

    container.innerHTML = "";

    movies.forEach((movie, index) => {
        const dot = document.createElement("button");
        dot.className = "dot";
        dot.setAttribute("aria-label", movie.title);

        dot.onclick = () => {
            showMovie(index);
            clearInterval(slideTimer);

            slideTimer = setInterval(() => {
                showMovie((currentIndex + 1) % movies.length);
            }, 10000);
        };
        slideTimer = setInterval(() => {
        showMovie((currentIndex + 1) % movies.length);
        }, 40000);
        container.appendChild(dot);
    });

    showMovie(0);


}

document.addEventListener("DOMContentLoaded", initSlider);

function displayMovies() {
    const moviesContainer = document.getElementById("movies");

    if (!moviesContainer) {
        console.error('Element with id="movies" not found');
        return;
    }

    moviesContainer.innerHTML = "";

    movies.forEach((movie, index) => {
        const card = document.createElement("div");
        card.className = "movie";
        card.dataset.name = movie.title;
        card.dataset.index = index;

        const link = document.createElement("a");
        link.href = movie.videoFile;

        link.addEventListener("click", function (event) {
            event.preventDefault();
            showMovieDetails(index);
        });

        const img = document.createElement("img");
        img.src = movie.image;
        img.alt = movie.title;
        img.loading = "lazy";

        const title = document.createElement("h3");
        title.textContent = movie.title;

        link.appendChild(img);
        card.appendChild(link);
        card.appendChild(title);

        moviesContainer.appendChild(card);
    });
}

function showMovieDetails(index) {
    currentIndex = index;

    const movie = movies[index];
    const details = document.getElementById("movieDetails");

    document.getElementById("detailTitle").textContent = movie.title;
    document.getElementById("detailDescription").textContent =
        movie.description;

    details.style.backgroundImage =
        `linear-gradient(to top, #000, transparent), url("${movie.image}")`;

    details.style.backgroundSize = "cover";
    details.style.backgroundPosition = "center";
    details.style.display = "flex";
    details.classList.add("active");
    showRelatedMovies(movie);
}

document.addEventListener("DOMContentLoaded", displayMovies);



function openSearchPopup() {
    const popup = document.getElementById("searchPopup");
    const input = document.getElementById("popupSearchInput");

    if (!popup || !input) {
        console.error("Search popup or input not found.");
        return;
    }

    popup.classList.add("active");
    input.value = "";
    input.focus();

    searchMovies("");
}

function closeSearchPopup() {
    const popup = document.getElementById("searchPopup");

    if (popup) {
        popup.classList.remove("active");
    }
}

function searchMovies(searchText) {
    const container = document.getElementById("searchResults");

    if (!container) {
        console.error("Element #searchResults not found.");
        return;
    }

    const query = searchText.trim().toLowerCase();
    container.innerHTML = "";

    const matches = movies
        .map((movie, index) => ({ movie, index }))
        .filter(({ movie }) =>
            movie.title.toLowerCase().includes(query)
        );

    if (matches.length === 0) {
        container.textContent = "No movies found.";
        return;
    }

    matches.forEach(({ movie, index }) => {
        const card = document.createElement("div");
        card.className = "movie";

        const img = document.createElement("img");
        img.src = movie.image;
        img.alt = movie.title;

        const title = document.createElement("h3");
        title.textContent = movie.title;

        card.append(img, title);

        card.addEventListener("click", () => {
            closeSearchPopup();
            showMovieDetails(index);
        });

        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("popupSearchInput");

    if (input) {
        input.addEventListener("input", () => {
            searchMovies(input.value);
        });
    }
});


function showRelatedMovies(selectedMovie) {
    const container = document.getElementById("relatedMovies");
    const section = document.getElementById("relatedSection");

    if (!container || !section || !selectedMovie) {
        console.error("Related movies section or selected movie is missing.");
        return;
    }

    const related = movies.filter(movie =>
        movie.category === selectedMovie.category &&
        movie !== selectedMovie
    );

    container.innerHTML = "";

    if (related.length === 0) {
        section.style.display = "none";
        return;
    }

    section.style.display = "block";

    related.forEach(movie => {
        const card = document.createElement("div");
        card.className = "movie";

        const img = document.createElement("img");
        img.src = movie.image;
        img.alt = movie.title;

        const title = document.createElement("h3");
        title.textContent = movie.title;

        card.appendChild(img);
        card.appendChild(title);

        card.addEventListener("click", () => {
            showMovieDetails(movies.indexOf(movie));
            window.scrollTo({ top: 0, behavior: "smooth" });
        });

        container.appendChild(card);
    });
}


function openLogin() {
    document.getElementById("loginModal").style.display = "flex";
}

function closeLogin() {
    document.getElementById("loginModal").style.display = "none";
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("loginMessage").textContent =
        "Demo only: connect an authentication service to sign in.";
});

// Close popup by clicking outside the box
document.getElementById("loginModal").addEventListener("click", function(event) {
    if (event.target === this) {
        closeLogin();
    }
});


function filterByCategory() {
    const selectedCategory =
        document.getElementById("categorySelect").value;

    const container = document.getElementById("movies");
    container.innerHTML = "";

    movies.forEach((movie, index) => {
        const categories = movie.category.toLowerCase().split(" ");

        const matches =
            selectedCategory === "all" ||
            categories.includes(selectedCategory) ||
            (selectedCategory === "big tits big boobs" &&
             movie.category.includes("big tits big boobs")) ||
            (selectedCategory === "oiled up" &&
             movie.category.includes("oiled up"));

        if (matches) {
            const card = document.createElement("div");
            card.className = "movie";

            const img = document.createElement("img");
            img.src = movie.image;
            img.alt = movie.title;

            const title = document.createElement("h3");
            title.textContent = movie.title;

            card.append(img, title);
            card.onclick = () => showMovieDetails(index);

            container.appendChild(card);
        }
    });
}


function showUpNext() {
    const popup = document.getElementById("upNextPopup");
    const container = document.getElementById("upNextMovies");
    const currentMovie = movies[currentIndex];

    if (!popup || !container || !currentMovie) return;

    container.innerHTML = "";

    // Recommend movies from the same category first
    let recommendations = movies.filter(movie =>
        movie !== currentMovie &&
        movie.category === currentMovie.category
    );

    // If no related movies exist, show other movies
    if (recommendations.length === 0) {
        recommendations = movies.filter(movie =>
            movie !== currentMovie
        );
    }

    recommendations.slice(0, 3).forEach(movie => {
        const index = movies.indexOf(movie);

        const card = document.createElement("div");
        card.className = "up-next-card";

        const img = document.createElement("img");
        img.src = movie.image;
        img.alt = movie.title;

        const info = document.createElement("div");
        info.className = "up-next-info";

        const title = document.createElement("h3");
        title.textContent = movie.title;

        const button = document.createElement("button");
        button.textContent = "▶ Play Now";

        button.addEventListener("click", () => {
            currentIndex = index;
            popup.classList.remove("active");
            playFullScreen();
        });

        info.append(title, button);
        card.append(img, info);
        container.appendChild(card);
    });

    popup.classList.add("active");
}

function closeUpNext() {
    const popup = document.getElementById("upNextPopup");
    if (popup) popup.classList.remove("active");
}

// Show recommendations when the current video ends

document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("movieVideo");
    const button = document.getElementById("nextEpisodeBtn");

    if (!video || !button) return;

    video.addEventListener("timeupdate", () => {
        const remaining = video.duration - video.currentTime;

        if (
            Number.isFinite(remaining) &&
            remaining <= 30 &&
            remaining > 0
        ) {
            button.classList.add("visible");
        } else {
            button.classList.remove("visible");
        }
    });

    video.addEventListener("play", () => {
        button.classList.remove("visible");
    });

    video.addEventListener("ended", () => {
        button.classList.remove("visible");
        watchedMovies.add(currentIndex);
        showUpNext();
    });
});





async function playNextEpisode() {
    const currentMovie = movies[currentIndex];

    if (!currentMovie) return;

    // Mark the current movie as watched
    watchedMovies.add(currentIndex);

    // Find the next unwatched movie in the same category
    const nextIndex = movies.findIndex((movie, index) =>
        movie.category === currentMovie.category &&
        !watchedMovies.has(index)
    );

    if (nextIndex === -1) {
        document.getElementById("nextEpisodeBtn")
            ?.classList.remove("visible");

        closeUpNext();

        alert("You have watched all movies in this category!");
        return;
    }

    // Switch to the next unwatched movie
    currentIndex = nextIndex;

    const video = document.getElementById("movieVideo");
    const player = document.getElementById("videoPlayer");
    const button = document.getElementById("nextEpisodeBtn");

    button?.classList.remove("visible");
    closeUpNext();

    video.pause();
    video.src = movies[currentIndex].videoFile;
    video.load();

    player.style.display = "flex";

    try {
        await video.play();

        if (!document.fullscreenElement &&
            player.requestFullscreen) {
            await player.requestFullscreen();
        }
    } catch (error) {
        console.error("Next movie playback failed:", error);
        alert("Couldn't play the next movie. Check its video file path.");
    }
}

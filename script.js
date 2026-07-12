document.addEventListener("DOMContentLoaded", () => {

    // Greeting based on time
    const hour = new Date().getHours();

    let text;

    if (hour >= 5 && hour < 12) {
        text = "Good Morning,";
    } else if (hour >= 12 && hour < 17) {
        text = "Good Afternoon,";
    } else if (hour >= 17 && hour < 22) {
        text = "Good Evening,";
    } else {
        text = "Hello,";
    }

    // Typewriter
    const heading = document.getElementById("typewriter");

    let index = 0;

    function type() {
        if (index < text.length) {
            heading.textContent += text.charAt(index);
            index++;
            setTimeout(type, 180);
        } else {
            heading.classList.add("finished");
        }
    }

    type();

    // Live Clock
    function updateClock() {
        const now = new Date();

        document.getElementById("clock").textContent =
            now.toLocaleTimeString("en-IN", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true
            });
    }

    updateClock();
    setInterval(updateClock, 1000);

    // Random Quote
    const quotes = [
        "too bad you ended up here.",
        "this page exists because domains get lonely.",
        "currently building something.",
        "still figuring things out.",
        "under construction since 2026.",
        "it's giving... homepage.",
        "nothing interesting. yet.",
        "go explore the subdomains.",
    ];

    document.getElementById("quote").textContent =
        quotes[Math.floor(Math.random() * quotes.length)];

});
console.log(`
██╗██╗  ██╗ ██████╗  ██████╗ ███╗   ███╗ █████╗ ███╗   ██╗
██║██║  ██║██╔═══██╗██╔═══██╗████╗ ████║██╔══██╗████╗  ██║
██║███████║██║   ██║██║   ██║██╔████╔██║███████║██╔██╗ ██║
██║██╔══██║██║   ██║██║   ██║██║╚██╔╝██║██╔══██║██║╚██╗██║
██║██║  ██║╚██████╔╝╚██████╔╝██║ ╚═╝ ██║██║  ██║██║ ╚████║
╚═╝╚═╝  ╚═╝ ╚═════╝  ╚═════╝ ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝

👋 Hey, curious developer.

Welcome to ihooman.xyz
`);
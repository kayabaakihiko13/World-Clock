import { getCurrentTime } from "./timeServices.js";

export function createClockCard(label, timezone) {
    const card = document.createElement("div");
    card.className =
        "backdrop-blur-md bg-white/10 border border-white/20 shadow-xl rounded-xl " +
        "p-5 w-48 text-center";

    const title = document.createElement("h2");
    title.className = "text-lg font-semibold mb-1";
    title.textContent = label;

    const timeEl = document.createElement("p");
    timeEl.className = "text-3xl font-bold tracking-wider";

    card.appendChild(title);
    card.appendChild(timeEl);

    // update time
    setInterval(() => {
        timeEl.textContent = getCurrentTime(timezone);
    }, 1000);

    return card;
}

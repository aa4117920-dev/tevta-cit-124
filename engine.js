console.log("connected...");

function calling(practicals) {
    let main_cont = document.getElementById("main-cont");
    let count = 0;

    for (let ind of practicals) {
        // HTML structure (Aapka extra div wrapper hata diya taaki direct control ho)
        let html = `
            <div class="prac" id="pr${count}" style="overflow: hidden; cursor: pointer;">
                <h2 class="pract-h">${ind.pr_hd}</h2>
                <p class="obj" title="objective"><para class="prac-out" title="Outline">${ind.outl}</para><br>${ind.obj}</p>
                <a href="${ind.video_lnk}" class="video-btn" title="video-button">video</a>
            </div>
        `;

        main_cont.insertAdjacentHTML('beforeend', html);

        // Current element ko target karna
        let currentPrac = main_cont.lastElementChild;

        // Click Event with Toggle Logic
        currentPrac.addEventListener("click", () => {
            // Agar pehle se height set hai, to usay khatam kar do (wapis purani size)
            if (currentPrac.style.height === "max-content") {
                currentPrac.style.height = ""; // Default CSS size par chala jayega
            } else {
                // Agar chota hai, to content ke mutabiq full height kar do
                currentPrac.style.height = "max-content";
            }
        });

        count++;
    }
}

function database() {
    let pr1 = {
        "index": 1,
        "pr_hd": "Practical no 1 :",
        "outl":`Basic use of ammeter, voltmeter, and multimeter for measuring electrical values.`,
        "obj": `Ammeter, voltmeter, and multimeter are basic electronic tools used to measure current, voltage, and resistance. It is important to use them correctly to keep the circuit safe and get accurate readings.`,
        "video_lnk": "https://www.youtube.com/watch?v=_RCB_IF4FLQ"
    };

    let pr2 = {
        "index": 2,
        "pr_hd": "Practical no 2 :",
        "outl":`Basic use of ammeter, voltmeter, and multimeter for measuring electrical values.`,
        "obj": `It is a long established fact2...`,
        "video_lnk": "https://www.wikipedia.com"
    };

    return [pr1, pr2];
}

let data = database();
calling(data);

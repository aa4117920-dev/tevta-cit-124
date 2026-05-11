console.log("connected...");

// animation remover
setTimeout(()=>{
    let ani=document.querySelector(".str-bdy-ani");
    ani.remove();
 // console.log(ani);
},3000);

// function runner
let data = database();
calling(data);
window.onload = () => main_detect(); 
ads_box();


// ===== ADS box enter video at a time interval
function ads_box(){
let vd=document.getElementById("main-ads");
let ani=document.getElementById("ani-vd");
let bx=document.getElementById("ads-main_cont");
// console.log(ani);
    // .onload=()=> ads_box();
let callback=(bx)=>{
ani.style.animationPlayState="paused";
ani.remove();
vd.style.opacity="1";
}   

vd.onloadeddata=()=>callback(vd);


}



//===> main practical container size detection and action function
function main_detect(){
let main_cont = document.getElementById("pre-main-cont");
let a=main_cont.scrollHeight;
let win_size=document.body.scrollWidth;
    // console.log(win_size);  
if(win_size>=751){
if(a>=500){
    // console.log("d")
    main_cont.style.height="400px";
    main_cont.style.overflowY="auto";
    }//condition close    
}

else if(win_size<=750){
    // console.log("m")
    // console.log(a)
 if(a>=300){
    let ani=document.getElementById("ads-main_cont");
    // console.log("m done")
    // console.log(win_size);  
    main_cont.style.height="380px";
    main_cont.style.overflowY="auto";
    ani.remove();
        }   //nested if close

    }//else if condtion close

}//function close




// data fecting function
function calling(practicals) {
    let main_cont = document.getElementById("pre-main-cont");
    let count = 0;

    for (let ind of practicals) {
        // HTML structure (Aapka extra div wrapper hata diya taaki direct control ho)
        let html = `
            <div class="prac" id="pr${count}" style="overflow: hidden; cursor: pointer;">
                <h2 class="pract-h">${ind.pr_hd}</h2>
                <p class="obj" title="objective"><para class="prac-out" title="Outline">${ind.outl}</para><br>${ind.obj}</p>
                <a href="${ind.video_lnk}" class="video-btn" title="video-button">Video</a>
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


// database
function database() {
 let pr1 = {
    "index": 1,
    "pr_hd": "Practical no 1 :",
    "outl": `Basic use of ammeter, voltmeter, and multimeter for measuring electrical values.`,
    "obj": `Ammeter, voltmeter, and multimeter are basic electronic tools used to measure current, voltage, and resistance. It is important to use them correctly to keep the circuit safe and get accurate readings.`,
    "video_lnk": "https://www.youtube.com/watch?v=_RCB_IF4FLQ"
};

let pr2 = {
    "index": 2,
    "pr_hd": "Practical no 2 :",
    "outl": `Practical measurement of current, voltage, and resistance using ammeter, voltmeter, and multimeter.`,
    "obj": `In this practical, ammeter, voltmeter, and multimeter are used to measure current, voltage, and resistance in a circuit. Proper connection and correct usage of these devices help in getting accurate readings and keeping the circuit safe.`,
    "video_lnk": "https://youtu.be/e3wnUVIkCwg?si=l_sxVC1wsmR7tIhD"
};

let pr3 = {
    "index": 3,
    "pr_hd": "Practical no 3 :",
    "outl": `Verification of Ohm’s Law by studying the relationship between current, voltage, and resistance.`,
    "obj": `Ohm’s Law explains the relationship between current, voltage, and resistance in a circuit. It shows that current is directly proportional to voltage and inversely proportional to resistance when temperature remains constant.`,
    "video_lnk": "https://www.youtube.com/watch?v=SrFcg_VvNUY"
};

let pr4 = {
    "index": 4,
    "pr_hd": "Practical no 4 :",
    "outl": `Study and verification of series and parallel combination of resistances in electric circuits.`,
    "obj": `Verification of laws of combination of resistance in circuits explains how resistances behave when connected in series and parallel. It helps us understand how total resistance changes and how current flows in different circuit arrangements.`,
    "video_lnk": "https://youtu.be/W3Fza3jyx9Y?si=qyZadnjHUnFVuxsn"
};

let pr5 = {
    "index": 5,
    "pr_hd": "Practical no 5 :",
    "outl": `Study and verification of series and parallel combination of resistances in electric circuits.`,
    "obj": `Verification of laws of combination of resistance in circuits explains how resistances behave when connected in series and parallel. It helps us understand how total resistance changes and how current flows in different circuit arrangements.`,
    "video_lnk": "https://youtu.be/W3Fza3jyx9Y?si=qyZadnjHUnFVuxsn"
};

let pr6 = {
    "index": 6,
    "pr_hd": "Practical no 6 :",
    "outl": `Verification of Kirchhoff’s Laws in electric circuits using series and parallel combinations to study current and voltage distribution.`,
    "obj": `Verification of Kirchhoff’s Laws explains how current and voltage behave in an electric circuit. It helps us understand the conservation of current at junctions and the conservation of voltage in closed loops of a circuit.`,
    "video_lnk": "https://youtu.be/uZADT4tuwQw?si=zviYnl2MPWppC8L9"
};

let pr7 = {
    "index": 7,
    "pr_hd": "Practical no 7 :",
    "outl": `Measurement of electric power in a circuit using voltmeter, ammeter, and wattmeter to study electrical parameters and power consumption.`,
    "obj": `Measurement of power by voltmeter, ammeter, and wattmeter explains how electrical power is determined in a circuit. It helps us understand the relationship between voltage, current, and power and the proper use of measuring instruments.`,
    "video_lnk": "https://www.youtube.com/watch?v=s2FBkNV3KAY"
};

let pr8 = {
    "index": 8,
    "pr_hd": "Practical no 8 :",
    "outl": `Measurement of electric energy using an energy meter to study energy consumption in electrical circuits and appliances.`,
    "obj": `Measuring electric energy by energy meter explains how electrical energy is consumed and recorded over time. It helps us understand the working of an energy meter and the calculation of electrical energy in kilowatt-hours (kWh).`,
    "video_lnk": "https://www.youtube.com/watch?v=GkOwxJWxTgU"
};

let pr9 = {
    "index": 9,
    "pr_hd": "Practical no 9 :",
    "outl": `Practice of resistor colour coding to identify the value and tolerance of different resistors used in electrical circuits.`,
    "obj": `Practice of resistor colour code explains how coloured bands on resistors represent resistance values and tolerance. It helps us understand the identification and proper use of resistors in electronic circuits.`,
    "video_lnk": "https://www.youtube.com/watch?v=ZDpYCAN5GtM"
};

let pr10 = {
    "index": 10,
    "pr_hd": "Practical no 10 :",
    "outl": `Combination of electric cells in series and parallel to study and verify the net voltage produced in different arrangements.`,
    "obj": `Combining cells in series and parallel explains how voltage changes with different cell connections. It helps us understand the calculation and verification of net voltage in series and parallel combinations of cells.`,
    "video_lnk": "https://www.youtube.com/watch?v=W3Fza3jyx9Y"
};
let pr11 = {
    "index": 11,
    "pr_hd": "Practical no 11 :",
    "outl": `Study of lead acid battery and practice use of hydrometer to measure the specific gravity of electrolyte and check battery condition.`,
    "obj": `Study of lead acid battery and use of hydrometer explains the construction and working of a lead acid battery. It helps us understand how to measure electrolyte density and determine the charging condition of the battery using a hydrometer.`,
    "video_lnk": "https://www.youtube.com/watch?v=-tXEZHjLQaE"
};

let pr12 = {
    "index": 12,
    "pr_hd": "Practical no 12 :",
    "outl": `Charging of lead acid battery to study the charging process, battery maintenance, and safe handling procedures.`,
    "obj": `Charging of lead acid battery explains how electrical energy is stored in a battery through the charging process. It helps us understand proper charging methods, precautions, and maintenance of lead acid batteries.`,
    "video_lnk": "https://www.youtube.com/watch?v=tBUN762tUts"
};

let pr13 = {
    "index": 13,
    "pr_hd": "Practical no 13 :",
    "outl": `Study of various types of capacitors and their colour coding to identify capacitor values and applications in electronic circuits.`,
    "obj": `Study of various types of capacitors and their colour coding explains the construction, types, and identification of capacitors. It helps us understand capacitor values, colour codes, and their use in electrical and electronic circuits.`,
    "video_lnk": "https://www.youtube.com/watch?v=Q0GO9Pbn3qY"
};

let pr14 = {
    "index": 14,
    "pr_hd": "Practical no 14 :",
    "outl": `Verification of laws of combination of capacitors in series and parallel to study total capacitance in different circuit arrangements.`,
    "obj": `Verification of laws of combination of capacitors explains how capacitance changes when capacitors are connected in series and parallel. It helps us understand the calculation of equivalent capacitance and the behavior of capacitors in electric circuits.`,
    "video_lnk": "https://www.youtube.com/watch?v=8Ew5CMXHsWU"
};

let pr15 = {
    "index": 15,
    "pr_hd": "Practical no 15 :",
    "outl": `Observation of charging and discharging of capacitor to study the behavior of voltage and current in capacitor circuits over time.`,
    "obj": `Observation of charging and discharging of capacitor explains how a capacitor stores and releases electrical energy. It helps us understand the variation of voltage and current during charging and discharging processes in electrical circuits.`,
    "video_lnk": "https://www.youtube.com/watch?v=AmeK3P09ly0"
};

let pr16 = {
    "index": 16,
    "pr_hd": "Practical no 16 :",
    "outl": `Study of sine wave on oscilloscope and determination of its peak, peak-to-peak, RMS, and average values.`,
    "obj": `Study of sine wave on oscilloscope explains how alternating waveforms are displayed and analyzed using an oscilloscope. It helps us understand different values of AC signal such as peak, peak-to-peak, RMS, and average value.`,
    "video_lnk": "https://www.youtube.com/watch?v=Y9ysWCSvljA"
};

    return [pr1, pr2, pr3, pr4, pr5, pr6, pr7, pr8, pr9, pr10, pr11, pr12, pr13, pr14, pr15, pr16];
}


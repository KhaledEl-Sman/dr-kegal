let currentDate = new Date();
let options = { month: "long", day: "numeric" };
currentDate.setDate(currentDate.getDate() + 28);
let formattedDate = currentDate.toLocaleDateString("en-US", options);
document.querySelector(
    "span.text-blue"
).innerHTML = `by ${formattedDate}`;



let ec = localStorage.getItem("ec");
let ef = localStorage.getItem("ef");
if (ec != null) {
    if (ec == "false") {
        document.querySelector("#ec").style.display = "none";
    }
}
if (ef != null) {
    if (ef == "false") document.querySelector("#ef").style.display = "none";
}



let counter = 0;
function startCountdown(timerElement) {
    let time = timerElement.innerHTML.split(":");
    let minutes = parseInt(time[0]);
    let seconds = parseInt(time[1]);
    if (localStorage.getItem("min") != null) {
        minutes = localStorage.getItem("min");
        seconds = localStorage.getItem("sec");
    }

    function updateTimer() {
        counter++;
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(interval);
                timerElement.innerHTML = "00:00";
                document.querySelectorAll(".rm-timer").forEach(timer => {
                    timer.style.display = "none";
                })
                return;
            }
            minutes--;
            if (minutes >= 0) seconds = 59;
            if (minutes < 0) {
                minutes = 0;
                localStorage.setItem("min", minutes);
                return;
            }
        } else {
            seconds--;
            if (seconds < 0) {
                seconds = 0;
                localStorage.setItem("sec", seconds);
                return;
            }
        }
        if (counter % 3 == 0) {
            localStorage.setItem("min", minutes);
            localStorage.setItem("sec", seconds);
        }
        timerElement.innerHTML =
            (minutes < 10 ? "0" + minutes : minutes) +
            ":" +
            (seconds < 10 ? "0" + seconds : seconds);
    }

    let interval = setInterval(updateTimer, 1000);
}

document.querySelectorAll(".timer").forEach(startCountdown);




let labels = document.querySelectorAll("label.py-7px");
let labelCounter = 0, popularCondition = false;
let paymentDescription = document.querySelectorAll("p.mt-32px");
let paymentDescriptionContent = [
    "We’ve automatically applied the discount to your 1-week Kegel Plan. Please note that your subscription will be automatically renewed at the 31.00 USD per 1 month at the end of your 1-week Kegel Plan and will then be continuously renewed every 1 month until you cancel. If you want to manage your subscription, you may do so visiting Billing Center or in the Dr. Kegel app.",
    "We’ve automatically applied the discount to your 1-month Kegel Plan. After 1 month, your subscription will be automatically renewed at the full price of 31.00 USD per 1 month and will then be continuously renewed every 1 month until you cancel. If you want to manage your subscription, you may do so visiting Billing Center or in the Dr. Kegel app.",
    "We’ve automatically applied the discount to your 3-months Kegel Plan. After 3 months, your subscription will be automatically renewed at the full price of 53.04 USD per 3 months and will then be continuously renewed every 3 months until you cancel. If you want to manage your subscription, you may do so visiting Billing Center or in the Dr. Kegel app."
]
labels.forEach((label, index) => {
    label.addEventListener("click", function () {
        labelCounter++;
        if (labelCounter % 2 == 0) {
            if (index == 1 || index == 4) popularCondition = true
            else popularCondition = false
            if (index > 2) index -= 3;
            paymentDescription.forEach((pd) => {
                pd.innerHTML = paymentDescriptionContent[index];
            })
            for (let i = 0; i < 6; i++) {
                if (i % 3 == index) {
                    let currentLabel = labels[i]
                    currentLabel.style.borderColor = "rgb(87, 115, 214)";
                    currentLabel.children[
                        currentLabel.children.length - 1
                    ].children[0].children[0].style.fill = "#5773D6";
                    currentLabel.children[currentLabel.children.length - 3].style.background =
                        "rgb(87, 115, 214)";
                    currentLabel.children[currentLabel.children.length - 3].style.borderColor =
                        "rgb(87, 115, 214)";
                    currentLabel.children[currentLabel.children.length - 3].innerHTML = `
                    <svg width="11" height="8" viewBox="0 0 11 8" fill="#fff" xmlns="http://www.w3.org/2000/svg" color="#222"
                        class="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
                        <path
                            d="M8.86407 0.52011C9.02386 0.564426 9.09904 0.619608 9.49349 0.981916C9.76854 1.23458 9.96896 1.44652 10.0127 1.53103C10.1101 1.71888 10.1114 1.9901 10.0157 2.17385C9.96383 2.2736 9.17782 3.02697 7.20389 4.86897C4.54087 7.35393 4.45896 7.42701 4.28096 7.47532C4.05263 7.53731 3.99849 7.53728 3.77071 7.47491C3.59581 7.42704 3.52593 7.36735 2.21284 6.14418C1.25733 5.25408 0.81639 4.82172 0.766969 4.72638C0.684073 4.5665 0.671734 4.32407 0.737101 4.13912C0.790904 3.98683 1.58979 3.21107 1.80089 3.10609C1.99359 3.01031 2.32112 3.01336 2.52568 3.11283C2.61674 3.15711 2.95071 3.43967 3.36088 3.81946L4.04438 4.45229L6.10835 2.52731C7.24354 1.46854 8.21024 0.584174 8.25659 0.562032C8.4593 0.465242 8.62512 0.453809 8.86407 0.52011Z"
                            fill="#fff">
                        </path>
                    </svg>
                    `;
                    currentLabel.children[
                        currentLabel.children.length - 1
                    ].children[1].children[0].classList.add("text-body");
                    currentLabel.children[
                        currentLabel.children.length - 1
                    ].children[1].children[0].classList.remove("text-[#11111340]");
                    currentLabel.children[
                        currentLabel.children.length - 1
                    ].children[1].children[1].classList.remove("opacity-50");
                    currentLabel.children[
                        currentLabel.children.length - 1
                    ].children[1].children[1].classList.add("opacity-100");
                    currentLabel.children[
                        currentLabel.children.length - 1
                    ].children[1].children[1].children[0].classList.add("!text-[#fff]");
                    currentLabel.children[
                        currentLabel.children.length - 1
                    ].children[1].children[1].children[1].classList.remove(
                        "text-[#11111380]"
                    );
                    currentLabel.children[
                        currentLabel.children.length - 1
                    ].children[1].children[1].children[1].classList.add("text-[#fff]");
                    if (currentLabel.children.length == 5) {
                        currentLabel.children[0].style.background = "rgb(87, 115, 214)";
                    }
                } else {
                    let currentLabel = labels[i]
                    if (currentLabel.style.borderColor == "rgb(87, 115, 214)") {
                        currentLabel.style.borderColor = "";
                        currentLabel.children[
                            currentLabel.children.length - 1
                        ].children[0].children[0].style.fill = "#F1F3F9";
                        currentLabel.children[
                            currentLabel.children.length - 3
                        ].style.background = "";
                        currentLabel.children[
                            currentLabel.children.length - 3
                        ].style.borderColor = "";
                        currentLabel.children[
                            currentLabel.children.length - 3
                        ].innerHTML = ``;
                        currentLabel.children[
                            currentLabel.children.length - 1
                        ].children[1].children[0].classList.remove("text-body");
                        currentLabel.children[
                            currentLabel.children.length - 1
                        ].children[1].children[0].classList.add("text-[#11111340]");
                        currentLabel.children[
                            currentLabel.children.length - 1
                        ].children[1].children[1].classList.remove("opacity-100");
                        currentLabel.children[
                            currentLabel.children.length - 1
                        ].children[1].children[1].classList.add("opacity-50");
                        currentLabel.children[
                            currentLabel.children.length - 1
                        ].children[1].children[1].children[0].classList.remove(
                            "!text-[#fff]"
                        );
                        currentLabel.children[
                            currentLabel.children.length - 1
                        ].children[1].children[1].children[1].classList.add(
                            "text-[#11111380]"
                        );
                        currentLabel.children[
                            currentLabel.children.length - 1
                        ].children[1].children[1].children[1].classList.remove(
                            "text-[#fff]"
                        );
                    }
                    if (currentLabel.children.length == 4 && !popularCondition) {
                        currentLabel.parentElement.children[1].children[0].style.background = "";
                    }
                }
            }
        }
    });
});


function videoAction(e) {
    e.target.style.display = "none";
    let videoElement = e.target.previousSibling;
    videoElement.currentTime = 0;
    videoElement.muted = false;
    videoElement.play();
}

function imgAction(e) {
    e.target.nextSibling.style.display = "block";
    e.target.pause();
}




function showMore() {
    let wantendReview = document.querySelector(".d-none");
    if (wantendReview) {
        wantendReview.classList.remove("d-none");
        setTimeout(() => {
            wantendReview.style.opacity = "1";
        }, 100);
    }
    if (document.querySelector(".d-none") == null)
        document.querySelector("button.text-blue").remove();
}

function scrollToForm() {
    document.getElementById('form').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}
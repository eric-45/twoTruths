function answers(event) {
    console.log("BUTTON PRESSED", event)
    //lie exposed
    const second = document.getElementById("second");
    second.style.backgroundColor = "gray";
    //drop shadow on truths
    const first = document.getElementById("first");
    const third = document.getElementById("third");
    first.style.textShadow="2px 5px 5px black";
    third.style.textShadow="2px 5px 5px black";
}

const bodyElement = document.getElementsByClassName("answers")[0];
bodyElement.addEventListener("click", answers);
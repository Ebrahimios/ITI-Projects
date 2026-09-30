document.querySelector("#submit").addEventListener("click", function () {
    let nameValue = document.querySelector("#name").value.trim();
    let ageValue = document.querySelector("#age").value.trim();
    let jobValue = document.querySelector("#jop").value.trim();

    if (nameValue === "" || ageValue === "" || jobValue === "") {
        alert("Please fill all fields");
    } else {
        console.log("Name: " + nameValue);
        console.log("Age: " + ageValue);
        console.log("Job: " + jobValue);
        if (Number(ageValue) < 18) {
            alert("You are under age");
        } else {
            alert("Registration Completed");
        }
    }
});
//your JS code here. If required.
   let formsDataCollect = document.querySelector(".forms");
        formsDataCollect.addEventListener("submit", showData);

        function showData(e) {
            e.preventDefault();

            let data = {
                firstName: document.querySelector(".firstName").value,
                lastName: document.querySelector(".lastName").value,
                phoneNumber: document.querySelector(".phoneNumber").value,
                email: document.querySelector(".email").value
            };

            alert(
                "First Name: " + data.firstName + "\n" +
                "Last Name: " + data.lastName + "\n" +
                "Phone Number: " + data.phoneNumber + "\n" +
                "Email ID: " + data.email
            );
        }
var _a;
(_a = document.getElementById("resume")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    var Nameele = document.getElementById("name");
    var Emailele = document.getElementById("email");
    var Phoneele = document.getElementById("phone");
    var Dobele = document.getElementById("dob");
    var titleele = document.getElementById("title");
    var aboutTextele = document.getElementById("About Me");
    var PictureProfile = document.getElementById("propic");
    var Schoolele = document.getElementById("school");
    var Degreeele = document.getElementById("degree");
    var eduTextele = document.getElementById("education");
    var Jobele = document.getElementById("jobname");
    var Companyele = document.getElementById("comname");
    var jobTextele = document.getElementById("exp");
    var skillTextele = document.getElementById("skill");
    var resumeoutput = document.querySelector(".resumeoutput");
    if (Nameele &&
        Emailele &&
        Phoneele &&
        Dobele &&
        titleele &&
        aboutTextele &&
        PictureProfile &&
        Schoolele &&
        Degreeele &&
        eduTextele &&
        Jobele &&
        Companyele &&
        jobTextele &&
        skillTextele &&
        resumeoutput) {
        var Name = Nameele.value;
        var Email = Emailele.value;
        var Phone = Phoneele.value;
        var Dob = Dobele.value;
        var title = titleele.value;
        var About = aboutTextele.value;
        var School = Schoolele.value;
        var Degree = Degreeele.value;
        var eduText = eduTextele.value;
        var Job = Jobele.value;
        var Company = Companyele.value;
        var jobText = jobTextele.value;
        var skillText = skillTextele.value;
        var profilePicture = (_a = PictureProfile.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureurl = profilePicture
            ? URL.createObjectURL(profilePicture)
            : "";
        var resumeOutput = "\n       <div class=\"header\" style=\"display: flex; align-items: center; gap: 130px; padding: 20px 60px 0px 0px; justify-content: center;\">\n  ".concat(profilePictureurl
            ? "<img class=\"img\" src=\"".concat(profilePictureurl, "\" alt=\"Profile Picture\" style=\"width: 150px; height: 150px; object-fit: cover; border-radius: 50%;\">")
            : "", "\n  \n  <div class=\"name\" style=\"text-align: center; width: 20vw;\">\n    <h1>").concat(Name, "</h1>\n    <h1>").concat(title, "</h1>\n  </div>\n</div>\n\n<!-- Main container for the About and Remaining sections -->\n<div style=\"display: flex; gap: 20px; padding: 20px; max-width: 100%; overflow: hidden;\">\n  \n  <!-- About Section on the Left -->\n  <div style=\"color:black;  flex: 1; padding: 20px; max-width: 40%; box-sizing: border-box; overflow-wrap: break-word; text-align: center; background-color: #ababab;\">\n    <h2 class=\"About\">About Me</h2>\n    <div class=\"about\" style=\"white-space: normal; margin:0px overflow-wrap: break-word;\">\n      ").concat(About, "\n    </div>\n  </div>\n\n  <!-- Remaining Sections on the Right -->\n  <div class=\"box1\" style=\"flex: 2; max-width: 60%; box-sizing: border-box;\">\n    <h2 style=\"margin-left: 20px;\">Personal Info</h2>\n    <div class=\"line\"></div>\n    <div>\n      <p><strong id=\"Name\">Name:</strong> <span id=\"editname\" class=\"editable\">").concat(Name, "</span></p>\n      <p><strong>Email:</strong> <span id=\"editemail\" class=\"editable\">").concat(Email, "</span></p>\n      <p><strong>Phone no:</strong> <span id=\"editphone\" class=\"editable\">").concat(Phone, "</span></p>\n      <p><strong>Date of Birth:</strong> <span id=\"editdob\" class=\"editable\">").concat(Dob, "</span></p>\n    </div>\n\n    <h2 style=\"margin-left: 20px;\">Education</h2>\n    <div class=\"line\"></div>\n    <p><strong>School:</strong> <span id=\"editschool\" class=\"editable\">").concat(School, "</span></p>\n    <p><strong>Degree:</strong> <span id=\"editdegree\" class=\"editable\">").concat(Degree, "</span></p>\n    <p><strong>About edu:</strong> <span id=\"editedutext\" class=\"editable\">").concat(eduText, "</span></p>\n\n    <h2 style=\"margin-left: 20px;\">Experience</h2>\n    <div class=\"line\"></div>\n    <p><strong>Job:</strong> <span id=\"editjob\" class=\"editable\">").concat(Job, "</span></p>\n    <p><strong>Company:</strong> <span id=\"editcompany\" class=\"editable\">").concat(Company, "</span></p>\n    <p><strong>Job des:</strong> <span id=\"editjobtext\" class=\"editable\">").concat(jobText, "</span></p>\n\n    <h2 style=\"margin-left: 20px;\">Skills</h2>\n    <div class=\"line\"></div>\n    <p><strong>Skills:</strong> <span id=\"editskilltext\" class=\"editable\">").concat(skillText, "</span></p>\n  </div>\n</div>");
        var Editablecontent = function () {
            var editableele = document.querySelectorAll(".editable");
            editableele.forEach(function (element) {
                element.addEventListener("click", function () {
                    var _a;
                    var currentele = element;
                    var currentvalues = currentele.textContent || "";
                    if (currentele.tagName === "p" || currentele.tagName === "span") {
                        var input = document.createElement("input");
                        input.type = "text";
                        input.value = currentvalues;
                        input.classList.add("editing input");
                        currentele.style.display = "none";
                        (_a = currentele.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input, currentele);
                    }
                });
            });
        };
        if (resumeOutput && resumeoutput) {
            resumeoutput.innerHTML = resumeOutput;
            Editablecontent();
        }
    }
    else {
        console.error("One or more output elements are missing");
    }
});

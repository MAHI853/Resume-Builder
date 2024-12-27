
genr = () => {
    const imageInput = document.getElementById("photo");
    const file = imageInput.files[0];
    
    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const previews = document.querySelectorAll(".preview");
            previews.forEach(preview => {
                preview.src = e.target.result;
                preview.style.display = 'block'; 
            });
        };
    
        reader.readAsDataURL(file);
    } else {
        const previews = document.querySelectorAll(".preview");
        previews.forEach(preview => {
            preview.src = ""; 
            preview.style.display = 'none'; 
        });
    }
    
    
    const inputIds = ["name1", "jobT1", "contact", "obj1", "mail", "address", "dob1", "exp", "edu", "Sdate", "Edate", "Lan1", "Lan2", "skill1", "skill2", "skill3", "skill4", "skill5"];
    const resumeElementClasses = {
        "name1": "name2",
        "jobT1": "jobT2",
        "contact": "number",
        "mail": "email", 
        "address": "location",
        "dob1": "dob2",
        "obj1": "obj2", 
        "edu": "education", 
        "exp": "experience",
        "Sdate": "sdate", 
        "Edate": "edate", 
        "Lan1": "language1", 
        "Lan2": "language2", 
        "skill1": "skill-1", 
        "skill2": "skill-2", 
        "skill3": "skill-3", 
        "skill4": "skill-4", 
        "skill5": "skill-5", 
    };

    inputIds.forEach((id) => {
        const text = document.getElementById(id).value;
        const targetClass = resumeElementClasses[id];
        if (targetClass) {
            const targetElements = document.querySelectorAll(`.${targetClass}`);
            targetElements.forEach(targetElement =>{
                targetElement.textContent = text;
            });
        }
    });


    const display = document.getElementById("none")
    display.style.display = "block"


    const selectedLayout = document.getElementById("layoutSelect").value;

    document.querySelectorAll('.resume-layout').forEach(layout => {
        layout.style.display = 'none';
    });

    const selectedResumeLayout = document.querySelector(`.${selectedLayout}`);
    if (selectedResumeLayout) {
        selectedResumeLayout.style.display = 'block';
    }
}
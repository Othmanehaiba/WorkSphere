const btnAddWorker = document.getElementById("addWorker");
const pop_up = document.querySelector(".pop_up");
const btnAddExperience = document.getElementById("experience");
const closePopUp = document.getElementById("X");
const exp = document.querySelector(".Exp");
let Employe = {
  FullName: "",
  role: "",
  picURL: "",
  email: "",
  phone: 0,
  experiences: [{PPost: "",
                PEntreprise: "",
                SDate: 0,
                Edate: 0}]
};

btnAddWorker.addEventListener("click", () => {
  pop_up.classList.remove("hidden");
});
closePopUp.addEventListener("click", () => {
  pop_up.classList.add("hidden");
});


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
btnAddExperience.addEventListener("click", (e) => {
  e.preventDefault();
  exp.innerHTML += `<h2 class="text-white text-2xl font-bold mb-6 text-center pt-4">
                        Add an Experience
                     </h2>
            <label class="block text-white mb-2 mx-[25%]" for="tele"
              >Previous Post</label
            >
            <input
              class="w-full px-4 py-2 rounded bg-gray-600 text-white w-80 mx-[25%]"
              type="text"
              id="post"
              placeholder="Ex: IT Tech "
            />
            <label class="block text-white mb-2 mx-[25%]" for="tele"
              >Previous Entreprise</label
            >
            <input
              class="w-full px-4 py-2 rounded bg-zinc-600 text-white w-80 mx-[25%]"
              type="text"
              id="post"
              placeholder="Ex: Microsoft "
            />
            <label class="block text-white mb-2 mx-[25%]" for="tele"
              >Start date</label
            >
            <input
              class="w-full px-4 py-2 rounded bg-zinc-600 text-white w-80 mx-[25%]"
              type="date"
              id="start_date"
            />
            <label class="block text-white mb-2 mx-[25%]" for="tele"
              >End date</label
            >
            <input
              class="w-full px-4 py-2 rounded bg-zinc-600 text-white mb-2 w-80 mx-[25%] pb-4"
              type="date"
              id="end_date"
            />`;
});

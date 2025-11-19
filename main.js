const btnAddWorker = document.getElementById("addWorker");
const pop_up = document.querySelector(".pop_up");
const btnAddExperience = document.getElementById("experience");
const closePopUp = document.getElementById("X");
const exps = document.querySelector(".experiences");
const form = document.querySelectorAll(".form");
const side = document.querySelector(".side");
const submit = document.getElementById("submit");
const fullName = document.getElementById("name");
const role = document.getElementById("role");
const picture = document.getElementById("pic");
const email = document.getElementById("email");
const phone = document.getElementById("tele");

let manyExp = 0;

let employees = [
  {
    id: 1,
    FullName: "Othmane Haiba",
    Role: "IT Guy",
    PicURL: "https://example.com/othmane.jpg",
    Email: "othmanehaiba4@gmail.com",
    Phone: 612345678,
    Experiences: [
      {
        PPost: "Junior Developer",
        PEntreprise: "Tech Solutions",
        SDate: 2020,
        Edate: 2022,
      },
      {
        PPost: "Senior Developer",
        PEntreprise: "Digital Corp",
        SDate: 2022,
        Edate: 2024,
      },
    ],
  }
];

// let Employe = {
//   id: 0,
//   FullName: "",
//   Role: "",
//   PicURL: "",
//   Email: "",
//   Phone: 0,
//   Experiences: [{ PPost: "", PEntreprise: "", SDate: 0, Edate: 0 }],
// };

btnAddWorker.addEventListener("click", () => {
  pop_up.classList.remove("hidden");
});
closePopUp.addEventListener("click", () => {
  pop_up.classList.add("hidden");
});
btnAddExperience.addEventListener("click", (e) => {
  e.preventDefault();
  exps.innerHTML += `<div class="exp bg-gray-400 rounded mb-4">
    <h2 class="text-white text-2xl font-bold mb-6 text-center pt-4">
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
            id="entreprise"
            value=" microsoft "
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
              />
              </div>`;
});
console.log(manyExp);

submit.addEventListener("click", (e) => {
  e.preventDefault();

  let employe = {};

  employe.FullName = fullName.value;
  employe.Role = role.value;
  employe.PicURL = picture.value;
  employe.Email = email.value;
  employe.Phone = phone.value;
  employe.Experiences = [];



  document.querySelectorAll(".exp").forEach((e) => {
    let exp = {}
    const post = e.target.getElementById("post");
    const entreprise = e.target.getElementById("entreprise");
    const dateDebut = e.target.getElementById("start_date");
    const dateFin = e.target.getElementById("end_date");

    exp.PPost = post.value;
    exp.PEntreprise = entreprise.value;
    exp.SDate = dateDebut.value;
    exp.Edate = dateFin.value;

    employe.Experiences.push(exp);
  });

  employees.push(employe);
  const container_cards = document.querySelector('.container_cards');
  const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <div class="card-info flex mx-4 rounded mb-4 mt-2 bg-gray-400">
        <img
              src="image/d97bbb08017ac2309307f0822e63d082.jpg"
              alt="user_by_default"
              class="w-[40px] h-[40px] rounded-3xl"
            />
          <h3>${fullName.value}</h3>
        </div>`;
        container_cards.append(card)
  pop_up.classList.add('hidden');
  
});

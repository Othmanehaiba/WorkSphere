const btnAddWorker = document.getElementById("addWorker");
const pop_up = document.querySelector(".pop_up");
const btnAddExperience = document.getElementById("experience");
const closePopUp = document.getElementById("X");
const exps = document.querySelector(".experiences");
const form = document.querySelector("form");
const side = document.querySelector(".side");
const submit = document.getElementById("submit");
const fullName = document.getElementById("name");
const role = document.getElementById("role");
const picture = document.getElementById("pic");
const email = document.getElementById("email");
const phone = document.getElementById("tele");
const addConferance = document.getElementById("conférenceBtn");
const addReception = document.getElementById("receptionBtn");
const addSecurity = document.getElementById("securityBtn");
const addArchieve = document.getElementById("archiveBtn");
const addPersonal = document.getElementById("personelBtn");
const addServeurs = document.getElementById("serveursBtn");
const listAvelaible = document.querySelector(".list_availeble");
const closeListAv = document.querySelector(".closePopup");
const staffContainer = document.querySelector("#staffContainer");

let room = null;
let manyExp = 0;

const addToChambre = document.querySelectorAll(".ajouter");

const zoneAcces = {
  conference: [
    "Manager",
    "Réceptionnistes",
    "Techniciens IT",
    "Agents de sécurité",
    "Nettoyage",
    "Autres rôles",
  ],
  personnel: [
    "Manager",
    "Réceptionnistes",
    "Techniciens IT",
    "Agents de sécurité",
    "Nettoyage",
    "Autres rôles",
  ],
  servers: ["Techniciens IT", "Manager", "Nettoyage"],
  security: ["Agents de sécurité", "Manager", "Nettoyage"],
  Réception: ["Réceptionnistes", "Manager", "Nettoyage"],
  archive: ["Manager"],
};
let employees = [];

picture.addEventListener("input", () => {
  const img = document.querySelector("#realPic");
  if (!picture) {
    img.src = "image/d97bbb08017ac2309307f0822e63d082.jpg";
  } else {
    img.src = picture.value;
  }
});

btnAddWorker.addEventListener("click", () => {
  pop_up.classList.remove("hidden");
});

closePopUp.addEventListener("click", () => {
  pop_up.classList.add("hidden");
  document.querySelector(".form").reset();
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

submit.addEventListener("click", (e) => {
  e.preventDefault();

  let employe = {
    FullName: fullName.value,
    Role: role.value,
    PicURL: picture.value,
    Email: email.value,
    Phone: phone.value,
    Experiences: [],
    currRoom: "unasigned",
  };
  console.log(employe.Role);

  document.querySelectorAll(".exp").forEach((e) => {
    let exp = {};
    const post = e.target.getElementById("post");
    const entreprise = e.target.getElementById("entreprise");
    const dateDebut = e.target.getElementById("start_date");
    const dateFin = e.target.getElementById("end_date");

    exp.PPost = post.value;
    exp.PEntreprise = entreprise.value;
    exp.SDate = dateDebut.value;
    exp.Edate = dateFin.value;

    employe.Experiences.push(exp);
    // document.querySelector("form").reset();
  });

  employees.push(employe);
  const container_cards = document.querySelector(".container_cards");
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.id = employees.length - 1;
  card.innerHTML = `
        <div class="card-info flex mx-4 rounded mb-4 mt-2 bg-gray-400">
        <img
              src="${picture.value}"
              alt="user_by_default"
              class=" rounded-full"
            />
          <div>
          <h3 class="text-2xl">${fullName.value}</h3> 
          <h4>${role.value}</h4>
          </div>  
        </div>`;
  container_cards.append(card);
  pop_up.classList.add("hidden");
  form.reset();

  //   const cards = document.querySelectorAll('.card');
  card.addEventListener("click", (e) => {
    const id = e.target.closest(".card").dataset.id;

    const countain = document.querySelector(".details");
    countain.classList.remove("hidden");
    countain.innerHTML = "";

    const details = document.createElement("div");
    details.innerHTML = `
    <button
            type="button"
            class="text-red-500 items-end ml-[100%] font-bold"
            id="closePopUp">X</button>
    <img src="${employees[id].PicURL}" class="w-auto h-auto rounded-full"> 

    <h3><b>FullName :</b> ${employees[id].FullName}</h3>
    <p><b>Role :</b> ${employees[id].Role}</p>
    <p><b>Email :</b> ${employees[id].Email}</p>
    <p><b>Phone :</b> ${employees[id].Phone}</p>
  `;

    countain.appendChild(details);
    document.getElementById("closePopUp").addEventListener("click", () => {
      document.querySelector(".details").classList.add("hidden");
    });
  });
});

function filterArray(paravailableEmployees, role) {
  let avEmployes = [];
  paravailableEmployees.forEach((avEmp) => {
    if (avEmp.Role === role) {
      avEmployes.push(avEmp);
    }
  });
  return avEmployes;
}
function isAvaileble(availble, room) {
  staffContainer.innerHTML = ``;
  let filtredArray = [];

  if (room === "conf" || room === "per") {
    filtredArray.push(...availble);
  }
  if (room === "ser") {
    filtredArray = filterArray(availble, "Techniciens IT");
    filtredArray.push(...filterArray(availble, "Manager"));
    filtredArray.push(...filterArray(availble, "Nettoyage"));
  }
  if (room === "sec") {
    filtredArray = filterArray(availble, "Agents de sécurité");
    filtredArray.push(...filterArray(availble, "Manager"));
    filtredArray.push(...filterArray(availble, "Nettoyage"));
  }
  if (room === "res") {
    filtredArray = filterArray(availble, "Réceptionnistes");
    filtredArray.push(...filterArray(availble, "Manager"));
    filtredArray.push(...filterArray(availble, "Nettoyage"));
  }
  if (room === "arch") {
    filtredArray = filterArray(availble, "Manager");
  }
  filtredArray.forEach((fil) => {
    const showUnassigned = document.createElement("div");
    showUnassigned.className =
      "card-info flex mx-4 rounded mb-4 mt-2 bg-gray-400";
    showUnassigned.innerHTML = `
        <img
              src="${fil.PicURL}"
              alt="user_by_default"
              class=" rounded-full"
            />
          <div>
          <h3 class="text-2xl">${fil.FullName}</h3> 
          <h4>${fil.Role}</h4>
          </div>  
    `;

    staffContainer.append(showUnassigned);

    listAvelaible.classList.remove("hidden");
    closeListAv.addEventListener("click", () => {
      listAvelaible.classList.add("hidden");
    });
  });
}
addToChambre.forEach((add) => {
  add.addEventListener("click", () => {
    let availble = [];
    employees.forEach((emp) => {
      if (emp.currRoom === "unasigned") {
        availble.push(emp);
        console.log("clicked");
      }
    });
    if (availble.length === 0) {
      document.querySelector(".msg-no-worker").classList.remove("hidden");
      setTimeout(() => {
        document.querySelector(".msg-no-worker").classList.add("hidden");
      }, 3000);
      return; 
    }
    if (add.classList.contains("conférence")) {
      isAvaileble(availble, "conf", 1);
      
    }
    if (add.classList.contains("serveurs")) {
      isAvaileble(availble, "ser", 2);
    }
    if (add.classList.contains("security")) {
      isAvaileble(availble, "sec", 3);
    }
    if (add.classList.contains("reception")) {
      isAvaileble(availble, "res", 4);
    }
    if (add.classList.contains("personel")) {
      isAvaileble(availble, "pers", 5);
    }
    if (add.classList.contains("archive")) {
      isAvaileble(availble, "arch", 6);
    }
  });
});

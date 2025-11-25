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
const btnAddToChamber = document.querySelectorAll(".ajouter");

let finalURL = null;

let employees = [];

picture.addEventListener("input", () => {
  const img = document.querySelector("#realPic");
  if (!picture.value) {
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
           <button
            type="button"
            class="deleteExp text-red-500 items-end ml-[90%] font-bold cursor-pointer"
            id="deleteExp"
          >
            Delete
          </button>
    <h2 class="text-white text-2xl font-bold mb-6 text-center pt-4">
    Add an Experience
    </h2>
    <form class="formExp">
    <label class="block text-white mb-2 mx-[25%]" for="tele"
    >Previous Post</label
    >
    <input
    class="px-4 py-2 rounded bg-gray-600 text-white w-auto mx-[25%]"
    type="text"
    id="post"
    placeholder="Ex: IT Tech "
    />
            <label class="block text-white mt-2 mx-[25%]" for="tele"
            >Previous Entreprise</label
            >
            <input
            class="px-4 py-2 rounded bg-zinc-600 text-white w-auto mx-[25%]"
            type="text"
            id="entreprise"
            value=" microsoft "
            placeholder="Ex: Microsoft "
            />
            <label class="block text-white mt-2 mx-[25%]" for="tele"
            >Start date</label
            >
            <input
            class="px-4 py-2 rounded bg-zinc-600 text-white w-auto mx-[25%]"
              type="date"
              id="start_date"
              />
              <label class="block text-white mt-2 mx-[25%]" for="tele"
              >End date</label
              >
              <input
              class="px-4 py-2 rounded bg-zinc-600 text-white mb-2 w-auto mx-[25%] pb-4"
              type="date"
              id="end_date"
              />
              </form>
                      </div>`;
});

exps.addEventListener("click", (event) => {
  const rmv = event.target.closest("#deleteExp");
  if (rmv) {
    rmv.parentElement.remove();
  }
});

function createSidebarCard(employee, index) {
  const container_cards = document.querySelector(".container_cards");
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.id = index;
  card.innerHTML = `
        <div class="card-info flex mx-4 rounded mb-4 mt-2 bg-gray-400">
        <img
              src="${employee.PicURL || 'image/d97bbb08017ac2309307f0822e63d082.jpg'}"
              alt="user_by_default"
              class="rounded-full w-20 h-20"
            />
          <div>
          <h3 class="text-2xl">${employee.FullName}</h3> 
          <h4>${employee.Role}</h4>
          </div>  
        </div>`;

  card.addEventListener("click", (e) => {
    const id = e.target.closest(".card").dataset.id;
    showEmployeeDetails(id);
  });

  container_cards.append(card);
  return card;
}


function showEmployeeDetails(id) {
  const countain = document.querySelector(".details");
  countain.classList.remove("hidden");
  countain.innerHTML = "";

  const details = document.createElement("div");
  details.innerHTML = `
    <button
            type="button"
            class="text-red-500 items-end ml-[95%] font-bold"
            id="closePopUp">X</button>
    <img src="${employees[id].PicURL || 'image/d97bbb08017ac2309307f0822e63d082.jpg'}" class="w-[50%] h-[50%] rounded-full mx-auto"> 
    <h3><b>FullName :</b> ${employees[id].FullName}</h3>
    <p><b>Role :</b> ${employees[id].Role}</p>
    <p><b>Email :</b> ${employees[id].Email}</p>
    <p><b>Phone :</b> ${employees[id].Phone}</p>
    <h4 class="font-bold">Experiences Profesionnel:</h4>
  `;

  // Add experiences if any
  employees[id].Experiences.forEach((exp, indx) => {
    const expDiv = document.createElement("div");
    expDiv.className = "mb-2";
    expDiv.innerHTML = `
      <h4 class="font-bold">Experience ${indx + 1}:</h4>
      <p><b>Previous Post :</b> ${exp.PPost}</p>
      <p><b>Previous company :</b> ${exp.PEntreprise}</p>
      <p><b>Start Date :</b> ${exp.SDate}</p>
      <p><b>End Date :</b> ${exp.Edate}</p>
    `;
    details.appendChild(expDiv);
  });

  countain.appendChild(details);
  document.getElementById("closePopUp").addEventListener("click", () => {
    document.querySelector(".details").classList.add("hidden");
  });
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  
  if (!fullName.value.trim()) {
    alert("Please enter a full name");
    return;
  }

  const nameRegex = /^[a-zA-ZÀ-ÿ\s-]+$/;
  if (!nameRegex.test(fullName.value)) {
    alert("Full name can only contain letters, spaces, and hyphens");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim() || !emailRegex.test(email.value)) {
    alert("Please enter a valid email address");
    return;
  }

  const phoneRegex = /^0[5-7]\d{8}$/;
  if (!phone.value.trim() || !phoneRegex.test(phone.value)) {
    alert("Please enter a valid Moroccan phone number (10 digits starting with 05, 06, or 07)");
    return;
  }

  let employe = {
    FullName: fullName.value,
    Role: role.value,
    PicURL: picture.value || 'image/d97bbb08017ac2309307f0822e63d082.jpg',
    Email: email.value,
    Phone: phone.value,
    Experiences: [],
    currRoom: "unasigned",
  };

  document.querySelectorAll(".exp").forEach((e) => {
    let exp = {};
    const post = e.querySelector("#post");
    const entreprise = e.querySelector("#entreprise");
    const dateDebut = e.querySelector("#start_date");
    const dateFin = e.querySelector("#end_date");

    if (!post.value.trim()) {
      alert("Please fill in the previous post for all experiences");
      experienceValid = false;
      return;
    }

    if (!entreprise.value.trim()) {
      alert("Please fill in the previous company for all experiences");
      experienceValid = false;
      return;
    }

    if (!dateDebut.value || !dateFin.value) {
      alert("Please fill in both start and end dates for all experiences");
      experienceValid = false;
      return;
    }

    const startDate = new Date(dateDebut.value);
    const endDate = new Date(dateFin.value);

    if (startDate >= endDate) {
      alert("Start date must be before end date in all experiences");
      experienceValid = false;
      return;
    }

    exp.PPost = post.value;
    exp.PEntreprise = entreprise.value;
    exp.SDate = dateDebut.value;
    exp.Edate = dateFin.value;

    employe.Experiences.push(exp);
  });

  employees.push(employe);
  createSidebarCard(employe, employees.length - 1);
  pop_up.classList.add("hidden");
  form.reset();
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

function isAvaileble(availble, room, roomName) {
  staffContainer.innerHTML = ``;
  let filtredArray = [];

  if (room === "conf" || room === "pers") {
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
              src="${fil.PicURL || 'image/d97bbb08017ac2309307f0822e63d082.jpg'}"
              alt="user_by_default"
              class="rounded-full w-[20%] h-[20%]"
            />
          <div>
          <h3 class="text-2xl">${fil.FullName}</h3> 
          <h4>${fil.Role}</h4>
          </div>  
    `;

    staffContainer.append(showUnassigned);
    showUnassigned.addEventListener("click", () => {
      const EmpToChamber = document.createElement("div");
      EmpToChamber.className = "relative bg-white p-2 rounded shadow-md mb-2";
      const empIndex = employees.indexOf(fil);
      EmpToChamber.dataset.id = empIndex;
      EmpToChamber.innerHTML = `
    <button class="deleteBtn absolute top-1 right-1 text-red-500 font-bold text-xl hover:text-red-700">×</button>
    <div class="flex items-center gap-2 employee-card-chamber cursor-pointer">
      <img
        src="${fil.PicURL || 'image/d97bbb08017ac2309307f0822e63d082.jpg'}"
        alt="user_by_default"
        class="rounded-full w-10 h-10"
      />
      <div>
        <h3 class="text-sm font-bold">${fil.FullName}</h3> 
        <h4 class="text-xs text-gray-600">${fil.Role}</h4>
      </div>
    </div>
      `;
      document.querySelector(roomName).append(EmpToChamber);

      // Add click event to show details for chamber employee
      EmpToChamber.querySelector(".employee-card-chamber").addEventListener("click", () => {
        showEmployeeDetails(empIndex);
      });

      // Update employee room status
      fil.currRoom = roomName;
      
      // Remove from sidebar
      const sidebarCard = document.querySelector(`.card[data-id="${empIndex}"]`);
      if (sidebarCard) {
        sidebarCard.remove();
      }
      
      showUnassigned.remove();

      if (staffContainer.children.length === 0) {
        listAvelaible.classList.add("hidden");
      }

      // Delete button - return employee to sidebar
      EmpToChamber.querySelector(".deleteBtn").addEventListener("click", () => {
        EmpToChamber.remove();
        fil.currRoom = "unasigned";
        
        // Re-add to sidebar
        createSidebarCard(fil, empIndex);
      });
    });

    listAvelaible.classList.remove("hidden");
    closeListAv.addEventListener("click", () => {
      listAvelaible.classList.add("hidden");
    });
  });
}

btnAddToChamber.forEach((add) => {
  add.addEventListener("click", () => {
    let availble = [];
    employees.forEach((emp) => {
      if (emp.currRoom === "unasigned") {
        availble.push(emp);
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
      isAvaileble(availble, "conf", ".conference");
    }
    if (add.classList.contains("serveurs")) {
      isAvaileble(availble, "ser", ".serveurs");
    }
    if (add.classList.contains("security")) {
      isAvaileble(availble, "sec", ".security");
    }
    if (add.classList.contains("reception")) {
      isAvaileble(availble, "res", ".reception");
    }
    if (add.classList.contains("personel")) {
      isAvaileble(availble, "pers", ".personel");
    }
    if (add.classList.contains("archive")) {
      isAvaileble(availble, "arch", ".archive");
    }
  });
});
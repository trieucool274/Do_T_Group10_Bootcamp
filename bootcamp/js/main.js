(() =>{
   
    const giaSelect = document.querySelector("#giaBio");
    const elifSelect = document.querySelector("#elifBio");
    const burakSelect = document.querySelector("#burakBio");
    const jacobSelect = document.querySelector("#jacobBio");
    const aaronSelect = document.querySelector("#aaronBio");

    //Gia Enter Info Here
    let gia ={
        name: "Enter Name",
        role: "Enter Role",
        bio: "Enter Bio"
    };
    //Elif Enter Info Here
    let elif ={
        name: "Enter Name",
        role: "Developer",
        bio: "Enter Bio"
    };
    //Burak Enter Info Here
    let burak ={
        name: "Enter Name",
        role: "Enter Role",
        bio: "Enter Bio"
    };

    let jacob ={
        name: "Jacob Smith",
        role: "UX/Development",
        bio: "Jacob is a Designer/Developer and lover of all things tech. With 3 years of Freelance experience He is an expert in client satisfaction."
    };
    //Aaron Enter Info here
    let aaron ={
        name: "Enter Name",
        role: "Enter Role",
        bio: "Enter Bio"
    };

    function showGia(){
        let info = document.querySelector("#giaBio").children;
        
        info[1].textContent = gia.name;
        info[2].textContent = gia.role;
        info[3].textContent = gia.bio;
        console.log(gia);
    }

    function showElif(){
        let info = document.querySelector("#elifBio").children;
        
        info[1].textContent = elif.name;
        info[2].textContent = elif.role;
        info[3].textContent = elif.bio;
        console.log(elif);
    }

    function showBurak(){
        let info = document.querySelector("#burakBio").children;
        
        info[1].textContent = burak.name;
        info[2].textContent = burak.role;
        info[3].textContent = burak.bio;
        console.log(burak);
    }

    function showJacob(){
        let info = document.querySelector("#jacobBio").children;
        
        info[1].textContent = jacob.name;
        info[2].textContent = jacob.role;
        info[3].textContent = jacob.bio;
        console.log(jacob);
    }

    function showAaron(){
        let info = document.querySelector("#aaronBio").children;
        
        info[1].textContent = aaron.name;
        info[2].textContent = aaron.role;
        info[3].textContent = aaron.bio;
        console.log(aaron);
    }




   giaSelect.addEventListener('click', showGia);
   elifSelect.addEventListener('click', showElif);
   burakSelect.addEventListener('click', showBurak);
   jacobSelect.addEventListener('click', showJacob);
   aaronSelect.addEventListener('click', showAaron);


})();
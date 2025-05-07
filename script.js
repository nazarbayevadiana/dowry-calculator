document.getElementById("calculate").addEventListener("click", () => {
    let basePrice = 100;
    let multiplier = 1;
    let bonus = 0;
  
    // Education
    const edu = document.getElementById("education").value;
    const eduMult = {
      undergraduate: 1.5,
      college: 1.2,
      highschool: 1.05,
      middleschool: 0.9,
    };
    multiplier *= eduMult[edu];
  
    // Net worth
    const worth = document.getElementById("networth").value;
    const worthMult = {
      more10k: 2,
      between5k10k: 1.5,
      less5k: 1.2,
    };
    multiplier *= worthMult[worth];
  
    // Caste bonus
    const caste = document.getElementById("caste").value;
    const casteBonus = {
      brahmin: 100,
      kshatriya: 50,
      vaishya: 20,
      shudra: 10,
      untouchable: -50,
    };
    bonus += casteBonus[caste];
  
    // Skills
    document.querySelectorAll('input[name="skills"]:checked').forEach(skill => {
      bonus += parseFloat(skill.value);
    });
  
    // Age
    const age = document.querySelector('input[name="age"]:checked');
    if (age) {
      const ageMult = {
        age18_23: 1.5,
        age24_27: 1.2,
        age28: 0.95,
      };
      multiplier *= ageMult[age.value];
    }
  
    // Reputation
    document.querySelectorAll('input[name="reputation"]:checked').forEach(item => {
      if (item.dataset.type === "multiplier") {
        multiplier *= parseFloat(item.value);
      } else {
        bonus += parseFloat(item.value);
      }
    });
  
    // Calculate final price
    const finalPrice = (basePrice * multiplier + bonus).toFixed(2);
    document.getElementById("result").innerText = `Final Price: $${finalPrice}`;
  
    // CSS DOM change (для требования задания)
    document.querySelector(".container").style.border = "3px solid darkblue";
  });
  
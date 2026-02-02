const taux = {
  EUR: { USD: 1.1, GBP: 0.86 },
  USD: { EUR: 0.91, GBP: 0.78 },
  GBP: { EUR: 1.16, USD: 1.28 }
};

function convertir() {
  const montant = document.getElementById("montant").value;
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;

  const resultat = from === to 
    ? montant 
    : montant * taux[from][to];

  document.getElementById("resultat").textContent =
    `${montant} ${from} = ${resultat.toFixed(2)} ${to}`;
}

function inverserDevises() {
  const from = document.getElementById("from");
  const to = document.getElementById("to");

  const temp = from.value;
  from.value = to.value;
  to.value = temp;

  convertir();
}

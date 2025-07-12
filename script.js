function contar() {
  let ini = document.getElementById('txti');
  let fim = document.getElementById('txtf');
  let passo = document.getElementById('txtp');
  let res = document.getElementById('res');

  if (ini.value === '' || fim.value === '' || passo.value === '') {
    res.innerHTML = '⚠️ Preencha todos os campos.';
    return;
  }

  let i = Number(ini.value);
  let f = Number(fim.value);
  let p = Number(passo.value);

  if (p <= 0) {
    alert('Passo inválido! Considerando PASSO 1.');
    p = 1;
  }

  res.innerHTML = 'Resultado: <br>';
  if (i < f) {
    for (let c = i; c <= f; c += p) {
      res.innerHTML += ` ${c} 👉`;
    }
  } else {
    for (let c = i; c >= f; c -= p) {
      res.innerHTML += ` ${c} 👉`;
    }
  }
  res.innerHTML += ' 🏁';
}

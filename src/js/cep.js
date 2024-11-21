document.getElementById("enderecoInfo").style.display = "none";

async function buscarEndereco() {
  const cep = document.getElementById("cep").value.trim();
  if (!cep) {
    alert("Por favor, digite um CEP!");
    return;
  }

  document.getElementById("erroMensagem").style.display = "none";

  try {
    const response = await fetch(`http://localhost:5000/endereco/${cep}`);
    if (!response.ok) {
      throw new Error("CEP não encontrado!");
    }
    const data = await response.json();

    document.getElementById("logradouro").textContent =
      data.logradouro || "N/A";
    document.getElementById("bairro").textContent = data.bairro || "N/A";
    document.getElementById("cidade").textContent = data.localidade || "N/A";
    document.getElementById("estado").textContent = data.uf || "N/A";
    document.getElementById("cod-ibge").textContent = data.ibge || "N/A";

    document.getElementById("enderecoInfo").style.display = "block";
  } catch (error) {
    document.getElementById("erroMensagem").textContent = error.message;
    document.getElementById("erroMensagem").style.display = "block";
    document.getElementById("enderecoInfo").style.display = "none";
  }
}

// ============================================================
//  CONVERSOR  -  Conversao e Validacao de Tipos
//  Backend 2DAT2  -  3o Trimestre
//  O frontend ja esta pronto em public/. Complete o TODO.
// ============================================================

const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

// Recebe { preco, quantidade } vindos do formulario (chegam como TEXTO).
app.post("/calcular", (req, res) => {
  const preco = Number(req.body.preco);
  const quantidade = parseInt(req.body.quantidade, 10);
  const percentualDesconto = Number(req.body.desconto);

  if (Number.isNaN(preco) || Number.isNaN(quantidade) || Number.isNaN(percentualDesconto)) {
    return res.status(400).json({ erro: "Digite numeros validos" });
  }

  const subtotal = preco * quantidade;
  const desconto = subtotal * (percentualDesconto / 100);
  const total = subtotal - desconto;

  return res.status(200).json({ preco, quantidade, desconto, total });
});

app.listen(PORT, () => {
  console.log(`Conversor no ar: http://localhost:${PORT}`);
});

function Relogio() {
  return (
    <>
        <h1>Meu Relógio</h1>
      let dataAtual = new Date();
        const diaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"][dataAtual.getDay()];
        const diaMes = dataAtual.getDate();
        const mes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"][dataAtual.getMonth()];
        const ano = dataAtual.getFullYear();
        const dataFormatada = `${diaSemana}, ${diaMes} de ${mes} de ${ano}`;
        console.log(dataFormatada);
        document.write(dataAtual)

function updateTime() {
            const date = new Date();
            const hours = date.getHours().toString().padStart(2, '0');
            const minutes = date.getMinutes().toString().padStart(2, '0');
            const seconds = date.getSeconds().toString().padStart(2, '0');
            const timeString = `${hours}:${minutes}:${seconds}`;
            document.getElementById('clock').innerHTML = timeString;
        }

        setInterval(updateTime, 1000);
    </>
  );
}

export default Relogio;

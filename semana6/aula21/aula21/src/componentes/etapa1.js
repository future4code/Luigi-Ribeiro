


function Etapa1() {
return (
    <div>
        <h1>Etapa 1- Dados gerais</h1>
        <div>
            <label for="nome">Qual o seu nome?</label>
            <br/>
            <input type="text" id="nome" />
        </div>
        <div>
            <label for="idade">Qual a sua idade?</label>
            <br/>
            <input type="number" id="idade" />
        </div>
        <div>
            <label for="email">Qual o seu email?</label>
            <br/>
            <input type="email" id="email" />
        </div>

        <div>
            <p>Qual a sua escolaridade?</p>
            <select>
                    <option value= "Ensino médio incompleto">Ensino médio incompleto</option>
                    <option value= "Ensino médio completo">Ensino médio completo</option>
                    <option value= "Ensino superior incompleto">Ensino superior incompleto</option>
                    <option value= "Ensino superior completo">Ensino superior completo</option>
            </select>
        </div>
        <br/>
        

    </div>
);
}

export default Etapa1
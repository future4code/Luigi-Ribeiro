function Etapa3() {
    return (
        <div>
            <h1>Etapa 3- Informações Gerais do ensino</h1>
            <div>
                <label for="motivograduação">Por que não terminou o curso de graduação?</label>
                <br/>
                <input type="text" id="motivograduaçao" />
            </div>
            <div>
            <p>Você fez algum curso complementar?</p>
            <select>
                    <option value= "Nenhum">Nenhum</option>
                    <option value= "Técnico">Curso técnico</option>
                    <option value= "Inglês">Curso de Inglês</option>
                    
            </select>
            </div>
            
        
            
            <br/>
            
        </div>
    );
    }
    
    export default Etapa3
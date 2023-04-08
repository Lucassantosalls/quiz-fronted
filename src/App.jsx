import { useEffect, useState } from "react";
import { api } from "./service/api";
import { Score } from "./novosComponentes/pontuacao";
import { HeaderQuestion } from "./novosComponentes/cabecalho";
import { AnswserQuestion } from "./novosComponentes/questoes";

function App() {
  const [frontEnd, setFrontEnd] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [loading, setLoading] = useState(true);
  const [minhasRespotas, setMinhasRespostas] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      if (loading) {
        const response = await api.get("/frontEnd");
        const data = response.data;
        setFrontEnd(data);
        console.log(data);
        setLoading(false);
      }
    };

    loadData();
  }, []);

  function handleChangeCorrectAnswer(isCorrect) {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < frontEnd.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  return (
    <div>
      <div
      >
        <h1>Quiz de Front-End </h1>
        <h2>Selecione as questões: </h2>
        {showScore ? (
          <Score frontEnd={frontEnd} score={score}/>
        ) : (
          !loading && (
            <>
              <HeaderQuestion frontEnd={frontEnd} currentQuestion={currentQuestion} />
              <br></br>
              <AnswserQuestion
                frontEnd={frontEnd}
                currentQuestion={currentQuestion}
                handleChangeCorrectAnswer={handleChangeCorrectAnswer}
                setMinhasRespostas={setMinhasRespostas}
              />
            </>
          )
        )}
        <br />
        <h2>Questões Selecionadas: </h2>
        {
          minhasRespotas.map((item) => (
          <>
          <div style={{display:"flex",flexDirection:"column"}}>
            {item.text}
          </div>
          </>
          ))
        }
      </div>
    </div>
  );
}

export default App;
export function AnswserQuestion(props) {
  return (
    <div style={{display:"flex",flexDirection:"column",width:"30%",gap:"3px"}}>
      {props.frontEnd[props.currentQuestion].answerOptions.map((item, index) => (
        <button
          key={index}
          onClick={() => { props.handleChangeCorrectAnswer(item.isCorrect) 
            props.setMinhasRespostas((props) => [...props, item]) } }
        >
          {item.text}
        </button>
      ))}
    </div>
  );
}

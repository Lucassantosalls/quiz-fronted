export function HeaderQuestion(props) {
  return (
    
    <>
      <div justifyContent="space-between" marginTop="3">
        <p>{props.currentQuestion + 1} / {props.frontEnd.length}</p>
        <p>{props.frontEnd[props.currentQuestion].question}</p>
        <div></div>
      </div>
    </>
  );
}

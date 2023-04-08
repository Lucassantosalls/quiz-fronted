export function Score(props) {
  function reset() {
    window.location.reload();
  }

  return (
    <div
    >
      <p>
        Você acertou {props.score} de 3.
      </p>
      <button onClick={reset}>
        Voltar
      </button>
    </div>
  );
}

import { redirect } from "next/dist/server/api-utils";
import { useRef, useState } from "react";

const contents = [
  {
    label: "Discordar",
    text: "Faça-me o Pix, só gradece 🙏",
    color: "red",
  },
  {
    label: "Concordar",
    text: "Vai ter que fazer o PIX esquece 🙅‍♂️",
    color: "green",
  },
  {
    label: "Inclusivo",
    text: "Só pra você enxergar João 👨‍🦯",
    color: "yellow",
  },
];

function Home() {
  const [state, setState] = useState({
    text: "Eu acho que o João é maluco e dodói, se concorda comigo manda um pix se não manda tbm",
    color: undefined,
  });

  return (
    <>
      <h1 style={{ color: state.color }}>{state.text}</h1>
      {contents.map((content) => (
        <button onClick={() => setState(content)}>{content.label}</button>
      ))}
    </>
  );
}

export default Home;

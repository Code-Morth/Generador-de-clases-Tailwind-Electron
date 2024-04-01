import { useState } from "react";
import "./App.css";
import { TbArrowBigRightLinesFilled } from "react-icons/tb";
import { MdOutlineContentCopy } from "react-icons/md";
import { Toaster, toast } from "sonner";
import ProcesedCss from "./JSFunctions/ProcesedCss";

function App() {
  const [finalText, setfinalText] = useState<string>("");
  const [forData, setforData] = useState<{ [key: string]: string }>({});

  const capture = (e: any) => {
    setforData({
      ...forData,
      [e.target.name]: e.target.value,
    });
  };

  const transformData = (e: string) => {
    setfinalText(ProcesedCss(forData[e]));
  };

  const handleCopy = () => {
    if (finalText != "") {
      navigator.clipboard
        .writeText(finalText)
        .then(() => {
          toast.success("Copiado con exito");
        })
        .catch(() => {
          toast.error("Copiado con exito");
        });
    } else {
      toast.error("El campo esta vacio");
    }
  };

  return (
    <>
      <Toaster richColors position="top-center" />
      <div className="App-container">
        <h1 className="title">Generador de clases de Tailwind</h1>
        <div className="App">
          <div className="container-1">
            <textarea
              className="text-area-left"
              placeholder="Ingrese tu texto"
              onChange={capture}
              name="initialText"
            />
          </div>
          <TbArrowBigRightLinesFilled
            className="arrow"
            onClick={() => {
              transformData("initialText");
            }}
          />
          <i className="fa-solid fa-arrow-right"></i>
          <div className="container-3">
            <textarea
              className="text-area-right"
              placeholder="Texto Final"
              value={finalText}
              name="finalText"
              onChange={capture}
            />
            <MdOutlineContentCopy onClick={handleCopy} className="copy-paste" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

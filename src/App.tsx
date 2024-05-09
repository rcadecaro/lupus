import { useState, useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";
import { colors } from "./constants/color.ts";
import { getGeneralFeedback } from "./services/api.ts";
import { FileUploader } from "react-drag-drop-files";

import Button from "./components/button/Button.tsx";
import Typography from "./components/typography/Typography.tsx";
import Navbar from "./components/navbar/Navbar.tsx";

import "./App.css";

const fileTypes = ["JPG", "PNG", "GIF"];

function App() {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<any>(null);
  const [step, setStep] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [url, setUrl] = useState<string | undefined>(undefined);

  const handleChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const handleDragAndDrop = (file) => {
    setFile(file);
  };

  useEffect(() => {
    const fetchAnalysis = async () => {
      try {
        setLoading(true);
        const feedbackResponse = await getGeneralFeedback(file);
        setFeedback(feedbackResponse);
        setLoading(false);
        setFile(null);
        setStep(1);
        generateImgURL();
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (file !== null) {
      fetchAnalysis();
    }
  }, [file]);

  const generateImgURL = () => {
    const generatedUrl = URL.createObjectURL(file);
    setUrl(generatedUrl);
  };

  const renderStep = (step: number) => {
    switch (step) {
      case 0:
        return (
          <div className="content step1">
            <Typography color={"white"} variant={"H1"}>
              ALCANCE O POTENCIAL MÁXIMO DOS SEUS DESIGNS
            </Typography>

            <Typography color={"white"} variant={"H2"}>
              Lupus é uma ferramenta que utiliza de inteligência artificial para
              analisar a UX/UI de seu design. Nós provemos feedback instantâneo
              das forças e fraquezas dos seus designs, e como você pode
              melhorá-los.
            </Typography>

            <div className="uploadSection">
              <Button variant={"File"} onClick={handleChange}>
                SELECIONAR ARQUIVO
              </Button>

              <Typography color={"white"} variant={"Secondary"}>
                formatos suportados: jpg & png
              </Typography>
            </div>
          </div>
        );

      case 1:
        return (
          <>
            <div className="resultContainer">
              <div className="content step2">
                <img
                  className="imagePreview"
                  src={url == undefined ? "" : url}
                  alt=""
                />
              </div>
              <div className="content step2">
                <Typography variant={"Primary"} color={"white"}>
                  Análise
                </Typography>

                <Typography variant={"Secondary"} color={"white"}>
                  {feedback}
                </Typography>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <>
      {loading ? (
        <div className="loadingContainer">
          <ThreeDots
            visible={true}
            height="80"
            width="80"
            color={colors.brandWhite}
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <FileUploader
          handleChange={handleDragAndDrop}
          name="file"
          types={fileTypes}
        >
          <div className="App">
            {" "}
            <Navbar />
            {renderStep(step)}
          </div>
        </FileUploader>
      )}
    </>
  );
}

export default App;

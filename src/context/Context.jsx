import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [inputPrompt, setInputPrompt] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  // const onSent = async (prompt) => {
  //   setResultData("");
  //   setLoading(true);
  //   setShowResult(true);
  //   setRecentPrompt(inputPrompt);
  //   const response = await runChat(inputPrompt);
  //   setResultData(response);
  //   setLoading(false);
  //   setInputPrompt("");
  // };

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };
  const newChat = () => {
    setResultData("");
    setLoading(false);
    setShowResult(false);
  };

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    let response;
    if (prompt !== undefined) {
      response = await runChat(prompt);
      setRecentPrompt(prompt);
    } else {
      setPrevPrompt((prev) => [...prev, inputPrompt]);
      setRecentPrompt(inputPrompt);
      response = await runChat(inputPrompt);
    }

    let responseArray = response?.split("**");
    let newResponse = "";
    for (let index = 0; index < responseArray?.length; index++) {
      if (index === 0 || index % 2 !== 1) {
        newResponse += responseArray[index];
      } else {
        newResponse += "<b>" + responseArray[index] + "</b>";
      }
    }
    let newResponse2 = newResponse.split("*").join("<br/>");
    let newResponseArray = newResponse2.split(" ");
    for (let index = 0; index < newResponseArray.length; index++) {
      const nextWord = newResponseArray[index];
      delayPara(index, nextWord + " ");
    }

    setLoading(false);
    setInputPrompt("");
  };
  const contextValue = {
    onSent,
    inputPrompt,
    setInputPrompt,
    recentPrompt,
    setRecentPrompt,
    prevPrompt,
    setPrevPrompt,
    showResult,
    setShowResult,
    loading,
    setLoading,
    resultData,
    setResultData,
    newChat,
  };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;

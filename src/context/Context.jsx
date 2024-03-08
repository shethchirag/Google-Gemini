import { createContext, useState } from "react";
import RunChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [prompt, setPrompt] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    setRecentPrompt(prompt);
    const response = await RunChat(prompt);
    setResultData(response);
    setLoading(false);
    setPrompt("");
  };
  const contextValue = {
    onSent,
    prompt,
    setPrompt,
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
  };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;

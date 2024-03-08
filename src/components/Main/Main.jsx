import { useContext } from "react";
import { assets, cards, searchBoxIcon } from "./../../assets/assets";
import { Context } from "../../context/Context";

function Main() {
  const {
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
  } = useContext(Context);

  const onSubmitHandler = (e) => {
    setPrompt(e.target.value);
  };

  const onButtonClickHandler = (inputIconSrc) => {
    if (inputIconSrc === assets.send_icon) {
      onSent(prompt);
    }
  };

  return (
    <div className="flex-1 min-h-[100vh] pb-[15vh] relative">
      <div className="flex items-center justify-between text-[22px] p-[20px] text-[#585858]">
        <p>Gemini</p>
        <img className="w-[40px] rounded-full" src={assets.user_icon} alt="" />
      </div>
      <div className="max-w-[900px] m-auto">
        {!showResult ? (
          <>
            {" "}
            <div className="mx-[50px] my-0 text-[56px] text-[#c4c7c5] font-medium p-5">
              <p>
                <span className="bg-gradient-to-br from-blue-500 to-red-500 text-transparent bg-clip-text">
                  Hello, chirag.
                </span>
              </p>
              <p>How can i help today?</p>
            </div>
            <div className="custom-grid">
              {cards.map((cardItem) => (
                <div
                  className="h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]"
                  key={cardItem.id}
                >
                  <p className="text-[#585858] text-[17px]">
                    {cardItem.cardText}
                  </p>
                  <img
                    className="w-[35px] p-[5px] absolute bg-white rounded-[20px] bottom-[10px] right-[10px]"
                    src={cardItem.cardIconSrc}
                  />
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="py-[5%] px-0 max-h-[70vh] overflow-y-scroll result">
            <div>
              <img src={assets.user_icon} />
              <p>{recentPrompt}</p>
            </div>
            <div>
              <img src={assets.gemini_icon} />
              <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
            </div>
          </div>
        )}

        <div className="absolute bottom-0 w-full max-w-[900px] py-0 px-[20px] m-auto">
          <div className="flex items-center justify-between gap-[20px] bg-[#f0f4f9] py-[10px] px-[20px] rounded-[50px]">
            <input
              className="flex-1 bg-transparent border-none outline-none p-[8px] text-[18px]"
              type="text"
              placeholder="Enter a prompt here"
              onChange={onSubmitHandler}
              value={prompt}
            />
            <div className="flex items-center gap-[15px]">
              {searchBoxIcon.map((icon) => (
                <img
                  onClick={() => onButtonClickHandler(icon.inputIconSrc)}
                  className="w-[24px] cursor-pointer"
                  key={icon.id}
                  src={icon.inputIconSrc}
                />
              ))}
            </div>
          </div>
          <p className="text-[13px] my-[15px] mx-auto text-center font-light">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;

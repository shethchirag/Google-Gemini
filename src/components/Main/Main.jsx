import { useContext } from "react";
import { assets, cards, searchBoxIcon } from "./../../assets/assets";
import { Context } from "../../context/Context";

function Main() {
  const {
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
  } = useContext(Context);

  const onSubmitHandler = (e) => {
    setInputPrompt(e.target.value);
  };

  const onButtonClickHandler = (inputIconSrc) => {
    if (inputIconSrc === assets.send_icon) {
      onSent();
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
            <div className="mx-[50px] my-0 text-[56px] max-sm:text-[30px] text-[#c4c7c5] font-medium p-5">
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
                  onClick={() => {
                    onSent(cardItem.cardText);
                  }}
                  className="h-[200px] max-sm:h-[150px] p-[15px]  bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]"
                  key={cardItem.id}
                >
                  <p className="text-[#585858] text-[17px] max-sm:text-[15px]">
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
          <div className="px-[5%] py-0 max-h-[70vh] overflow-y-scroll result">
            <div className="flex items-center gap-[20px] py-[40px] px-0">
              <img className="w-[40px] rounded-full" src={assets.user_icon} />
              <p>{recentPrompt}</p>
            </div>
            <div className="flex items-start gap-[20px]">
              <img className="w-[40px]" src={assets.gemini_icon} />
              {loading ? (
                <div className="w-full flex flex-col gap-[10px]">
                  <hr className="rounded-md bg-gradient-to-r from-blue-300 via-white to-blue-300 bg-gray-100 h-[20px] loader" />
                  <hr className="rounded-md bg-gradient-to-r from-blue-300 via-white to-blue-300 bg-gray-100 h-[20px] loader" />
                  <hr className="rounded-md bg-gradient-to-r from-blue-300 via-white to-blue-300 bg-gray-100 h-[20px] loader" />
                </div>
              ) : (
                <p
                  className="text-[17px] font-light leading-[1.8]"
                  dangerouslySetInnerHTML={{ __html: resultData }}
                ></p>
              )}
            </div>
          </div>
        )}

        <div className="absolute bottom-0  w-full max-w-[900px] py-0 px-[20px] m-auto">
          <div className="flex items-center justify-between gap-[20px] bg-[#f0f4f9] py-[10px] px-[20px] rounded-[50px]">
            <input
              className="flex-1 bg-transparent border-none outline-none p-[8px] max-sm:p-[5px] text-[18px] max-sm:text-[12px]"
              type="text"
              placeholder="Enter a prompt here"
              onChange={onSubmitHandler}
              value={inputPrompt}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  onSent();
                }
              }}
            />
            <div className="flex items-center gap-[15px] max-sm:gap-2">
              {searchBoxIcon.map((icon) => (
                <img
                  onClick={() => onButtonClickHandler(icon.inputIconSrc)}
                  className={`w-[24px] max-sm:w-[14px] cursor-pointer ${
                    inputPrompt === "" && icon.inputIconSrc === assets.send_icon
                      ? "hidden"
                      : ""
                  }`}
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

import openAi from "../../utils/openAi";

const useGptSearch = async (searchText) => {
  const gptQuery = `act as a movie reccommendation system and suggest some movies for the query: ${searchText} , only give me names of five movies seperated by comma like the example given ahead. Example result: titanic, avatar, avengers, john wick, blade runner`;

  const chatCompletion = await openAi.chat.completions.create({
    messages: [{ role: "user", content: gptQuery }],
    model: "gpt-3.5-turbo",
  });

  if (!chatCompletion.choices) {
    // error handling
  }
  const gptMovies = chatCompletion.choices?.[0]?.message?.content.split(",");
  return gptMovies;
};

export default useGptSearch;

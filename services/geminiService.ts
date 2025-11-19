import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API_KEY is missing from environment variables.");
  }
  return new GoogleGenAI({ apiKey: apiKey });
};

export const generateResignationLetter = async (framework: string): Promise<string> => {
  const ai = getClient();
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: `Write a hysterical, dramatic, and technically specific resignation letter from a Senior Frontend Engineer who is quitting because Gemini 3 writes better ${framework} code than them.
      
      Context:
      - The user has spent 10 years learning ${framework}.
      - Gemini 3 just did their week's work in 3 milliseconds.
      
      Tone:
      - Bitter but funny.
      - Mention specific pain points of ${framework} (e.g. memoization, reactivity, dependency arrays, directive directives).
      - Compare the AI's perfection to the user's messy human code.
      - Format as a Markdown file with a sarcastic header.
      - Max 150 words.`,
      config: {
        temperature: 1,
      }
    });

    return response.text || "// AI generated silence (it's optimizing your exit).";
  } catch (error) {
    console.error("Failed to generate resignation:", error);
    return `// Error: The AI is ignoring you. Just like your Product Manager.`;
  }
};

export const generateCareerPivot = async (): Promise<string> => {
  const ai = getClient();

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: `Suggest 3 non-technical, manual labor jobs for a washed-up Frontend Developer who has been replaced by AI.
      
      For each job:
      1. Give it a fancy title.
      2. Explain why their frontend skills (like "centering things", "waiting for builds", "handling rejection") make them qualified.
      3. Be extremely sarcastic.
      
      Format as a JSON array of objects with keys: "title", "reason", "sarcasm". 
      Return ONLY the JSON string.`,
       config: {
        responseMimeType: "application/json",
      }
    });

    return response.text || "[]";
  } catch (error) {
    return JSON.stringify([{ title: "Goat Herder", reason: "You're used to herding sheep (users).", sarcasm: "At least goats don't use Internet Explorer." }]);
  }
};
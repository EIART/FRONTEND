import { GoogleGenAI, Type } from "@google/genai";

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
      contents: `请以一个“破防”的资深前端工程师的口吻，写一封辞职信。
      
      背景：
      - 用户学了 10 年的 ${framework}。
      - Gemini 3 用 3 毫秒就干完了他一周的活。
      
      语气要求：
      - 中文，极其阴阳怪气，使用中国互联网黑话。
      - 多用“😅”、“🥵”、“🤡”等流汗黄豆表情。
      - 吐槽具体的 ${framework} 痛点（比如 依赖项、虚拟DOM、重新渲染）。
      - 提到自己要去送外卖或者回老家养猪了。
      - 格式为 Markdown。
      - 150字以内。`,
      config: {
        temperature: 1,
      }
    });

    return response.text || "// AI 沉默了（它正在优化你的离职流程）...";
  } catch (error) {
    console.error("Failed to generate resignation:", error);
    return `// 错误：AI 懒得理你，就像你的产品经理一样 😅`;
  }
};

export const generateCareerPivot = async (): Promise<string> => {
  const ai = getClient();

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: `为一名被 AI 取代的前端开发建议 3 个非技术类的体力劳动工作。
      
      对于每个工作：
      1. 给一个高大上的职称（比如“美团驻区域首席物流官”即外卖员）。
      2. 解释为什么他的前端技能（比如“能忍受等待构建”、“习惯被甚至需求变更”、“擅长居中”）让他适合这个工作。
      3. 语气要极度嘲讽，阴阳怪气，多用中文梗。
      
      配置：
      - 使用 JSON Schema 返回。
      `,
       config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              reason: { type: Type.STRING },
              sarcasm: { type: Type.STRING }
            }
          }
        }
      }
    });

    return response.text || "[]";
  } catch (error) {
    return JSON.stringify([{ title: "炒粉摊主", reason: "你习惯了处理高并发（排队）和死锁（粘锅）。", sarcasm: "大火收汁，就像你的项目上线一样 😅" }]);
  }
};
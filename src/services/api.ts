import { GoogleGenerativeAI } from "@google/generative-ai";
import { prompts } from "../constants/prompts.ts";

const API_KEY = "";
const genAI = new GoogleGenerativeAI(API_KEY);

async function fileToGenerativePart(file) {
  const base64EncodedDataPromise = new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result.split(",")[1]);
    reader.readAsDataURL(file);
  });
  return {
    inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
  };
}

export const getUXFeedback = async (file, prompt) => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
  const image = await fileToGenerativePart(file);

  const result = await model.generateContent([prompt, image]);
  const response = await result.response;
  const text = await response.text();

  console.log(text);

  return text;
};

export const getAcessibilityFeedback = async (file) => {
  const feedback = await getUXFeedback(file, prompts.acessibility);
  return feedback;
};

export const getConsistencyFeedback = async (file) => {
  const feedback = await getUXFeedback(file, prompts.consistency);
  return feedback;
};

export const getUsabilityFeedback = async (file) => {
  const feedback = await getUXFeedback(file, prompts.usability);
  return feedback;
};

export const getHierarchyFeedback = async (file) => {
  const feedback = await getUXFeedback(file, prompts.hierarchy);
  return feedback;
};

export const getAestheticFeedback = async (file) => {
  const feedback = await getUXFeedback(file, prompts.aesthetic);
  return feedback;
};

export const getGeneralFeedback = async (file) => {
  const feedback = await getUXFeedback(file, prompts.general);
  return feedback;
};

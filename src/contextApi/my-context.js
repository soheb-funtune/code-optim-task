import { createContext } from "react";

export const MyContext = createContext();

export const initialState = [
  { task: "Go to Gym", priority: "High", progress: "To_Do" },
  { task: "Read a Book", priority: "Low", progress: "Done" },
  { task: "Go to market", priority: "Medium", progress: "In_Progress" },
  { task: "Restart learning Solidworks", priority: "High", progress: "To_Do" },
  { task: "Change slide to scroll", priority: "High", progress: "Done" },
  {
    task: "To publish the article",
    priority: "Medium",
    progress: "In_Progress",
  },
];

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [action.payload, ...state];
    case "EDIT":
      return [...action.payload];
    case "API":
      return [...action.payload, ...state];
    case "DEL":
      return [...action.payload];
    // Other cases for different actions...
    default:
      return state;
  }
};

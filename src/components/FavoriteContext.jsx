import { createContext, useContext, useReducer } from "react";

// 初始狀態
const initialState = {
  favorites: [],
};

// reducer 處理加 / 移除收藏
function favoriteReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        favorites: state.favorites.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
}

// 創建 context
const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {
  const [state, dispatch] = useReducer(favoriteReducer, initialState);
  return (
    <FavoriteContext.Provider value={{ favorites: state.favorites, dispatch }}>
      {children}
    </FavoriteContext.Provider>
  );
}

// 自定義 hook
export function useFavorite() {
  return useContext(FavoriteContext);
}

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const MORE_USERS = "MORE-USERS";

let initialState = {
  users: [
    {
      id: 1,
      photoUrl:
        "https://bumper-stickers.ru/31914-thickbox_default/gubka-bob.jpg",
      follow: false,
      firstname: "Pavel",
      secondname: "Ivanov",
      status: "I am here",
      location: { city: "Moscow", country: "Russia" }
    },
    {
      id: 2,
      photoUrl: "https://slovnet.ru/wp-content/uploads/2018/11/2-2.jpeg",
      follow: true,
      firstname: "Sasha",
      secondname: "Loparov",
      status: "I am here too",
      location: { city: "St.Peter", country: "Russia" }
    },
    {
      id: 3,
      photoUrl: "",
      follow: false,
      firstname: "Gleb",
      secondname: "Kilov",
      status: "Like you",
      location: { city: "Warsaw", country: "Poland" }
    },
    {
      id: 4,
      photoUrl: "",
      follow: false,
      firstname: "Kostya",
      secondname: "Petuhov",
      status: "Relaxing",
      location: { city: "Minsk", country: "Belarussia" }
    },
    {
      id: 5,
      photoUrl: "",
      follow: false,
      firstname: "Vova",
      secondname: "Sobakin",
      status: "Working",
      location: { city: "Orel", country: "Russia" }
    },
    {
      id: 6,
      photoUrl: "",
      follow: false,
      firstname: "Petya",
      secondname: "Koshkin",
      status: "Sleeping",
      location: { city: "Omsk", country: "Russia" }
    },
    {
      id: 7,
      photoUrl: "",
      follow: false,
      firstname: "Masha",
      secondname: "Salova",
      status: "Watching TV",
      location: { city: "Podolsk", country: "Russia" }
    },
    {
      id: 8,
      photoUrl: "",
      follow: false,
      firstname: "Lera",
      secondname: "Petrova",
      status: "Listening music",
      location: { city: "Himki", country: "Russia" }
    }
  ]
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, follow: true };
          }
          return u;
        })
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, follow: false };
          }
          return u;
        })
      };
    case SET_USERS:
      return { ...state, users: [...state.users, ...action.users] };
    default:
      return state;
  }
};

export const followAC = userId => ({ type: FOLLOW, userId });
export const unfollowAC = userId => ({ type: UNFOLLOW, userId });
export const setUsersAC = users => ({ type: SET_USERS, users });

export default usersReducer;

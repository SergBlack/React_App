const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
  messagesData: [
    { id: 1, message: 'Hey Dude!' },
    { id: 2, message: 'Wazzaup!' },
    { id: 3, message: 'Link me!' },
    { id: 4, message: 'Wrong chat!' }
  ],
  dialogsData: [
    { id: 1, name: 'Pasha' },
    { id: 2, name: 'Dasha' },
    { id: 3, name: 'Sasha' },
    { id: 4, name: 'Masha' }
  ]
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      return {
        ...state,
        messagesData: [
          ...state.messagesData,
          { id: 5, message: action.message }
        ]
      };
    }
    default:
      return state;
  }
};

export const addMessage = message => ({ type: ADD_MESSAGE, message });

export default dialogsReducer;

import axios from 'axios';

export async function AddMacroLog(macros) {
  try {
    await axios.post('http://localhost:3030/api/save-macro-log', macros);
  } catch(e) {
    console.warn(e)
  }
}

export async function AddFoodItem(macros) {
  try {
    //TODO: get user id.
    await axios.post('http://localhost:3030/api/save-food-item', {
      id: '123123',
      ...macros
    });
  } catch(e) {
    console.warn(e)
  }
}
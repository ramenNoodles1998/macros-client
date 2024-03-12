import axios from 'axios';

export async function AddMacroLog(macros) {
  try {
    await axios.post('http://localhost:3030/api/save-macro-log', macros);
  } catch(e) {
    console.warn(e)
  }
}

export async function AddFoodItem(foodItem) {
  //TODO: have go backend send json in camelcase.
  //then add to list after successful api call.
  try {
    //TODO: get user id.
    return await axios.post('http://localhost:3030/api/save-food-item', {
      id: '123123',
      ...foodItem
    });
  } catch(e) {
    console.warn(e)
    return;
  }
}

export async function DeleteFoodItem(foodItem) {
  console.log(foodItem);
  try {
    return await axios.post('http://localhost:3030/api/delete-food-item', {
      id: '123123',
      ...foodItem
    });
  } catch(e) {
    console.warn(e)
    return;
  }

}


export async function GetFoodItems() {
  try {
    //TODO: get user id.
    return await axios.get('http://localhost:3030/api/get-food-items');
  } catch(e) {
    console.warn(e)
    return;
  }
}
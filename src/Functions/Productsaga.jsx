import { takeEvery, put } from "redux-saga/effects";
import {
  Produ_list,
  Produ_list1,
  Produ_list2,
  Produ_list3,
  Produ_list4,
  Produ_list5,
  Produ_list6,
  Produ_list7,
  Produ_list8,
  Produ_list9,
  SET_produ_list,
  SET_produ_list1,
  SET_produ_list2,
  SET_produ_list3,
  SET_produ_list4,
  SET_produ_list5,
  SET_produ_list6,
  SET_produ_list7,
  SET_produ_list8,
  SET_produ_list9,
} from "./Constant";
import {
  Wallets,
  Belts,
  Leatherbag,
  Leathergloves,
  Leatherjackets,
  Leatherkeychains,
  Leathernotebookcovers,
  Leatherphonecases,
  Leathershoes,
  Leatherwatchstraps,
} from "../Data.json";

// Individual product sagas
function* oneProd() {
  console.log("saga", Wallets);
  yield put({ type: SET_produ_list, data: Wallets });
}

function* twoprod() {
  console.log("saga", Belts);
  yield put({ type: SET_produ_list1, data: Belts });
}

function* threeprod() {
  console.log("saga", Leathergloves);
  yield put({ type: SET_produ_list2, data: Leathergloves });
}

function* fourprod() {
  console.log("saga", Leatherjackets);
  yield put({ type: SET_produ_list3, data: Leatherjackets });
}

function* fiveprod() {
  console.log("saga", Leatherkeychains);
  yield put({ type: SET_produ_list4, data: Leatherkeychains });
}

function* sixprod() {
  console.log("saga", Leathernotebookcovers);
  yield put({ type: SET_produ_list5, data: Leathernotebookcovers });
}

function* sevenprod() {
  console.log("saga", Leatherphonecases);
  yield put({ type: SET_produ_list6, data: Leatherphonecases });
}

function* eightprod() {
  console.log("saga", Leathershoes);
  yield put({ type: SET_produ_list7, data: Leathershoes });
}

function* nineprod() {
  console.log("saga", Leatherbag);
  yield put({ type: SET_produ_list8, data: Leatherbag });
}

function* tenprod() {
  console.log("saga", Leatherwatchstraps);
  yield put({ type: SET_produ_list9, data: Leatherwatchstraps });
}

// Main saga function
function* ProductSaga() {
  yield takeEvery(Produ_list, oneProd);
  yield takeEvery(Produ_list1, twoprod);
  yield takeEvery(Produ_list2, threeprod);
  yield takeEvery(Produ_list3, fourprod);
  yield takeEvery(Produ_list4, fiveprod);
  yield takeEvery(Produ_list5, sixprod);
  yield takeEvery(Produ_list6, sevenprod);
  yield takeEvery(Produ_list7, eightprod);
  yield takeEvery(Produ_list8, nineprod);
  yield takeEvery(Produ_list9, tenprod);
}

export default ProductSaga;

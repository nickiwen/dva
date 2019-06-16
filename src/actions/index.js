import { createAction } from "redux-actions"

export const productUpdatelist  = createAction("product/updateList");
export const productUpdatelistAsync  = createAction("product/updateListAsync");
export const productUpdatelistHttp  = createAction("product/updateListHttp");
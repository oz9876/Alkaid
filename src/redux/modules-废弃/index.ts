import { Map, List } from 'immutable';
import { Dispatch } from 'redux';

const initialState = Map({
    dragData:{}
});

const SET_DRAG_DATA = 'SET_DRAG_DATA';

interface ReduxActionType {
    type?:String,
    data?:any
}

export default function reducer(state = initialState, action: ReduxActionType = {}) {
    switch (action.type) {
        case SET_DRAG_DATA:
            return state.merge({
                labelsList: action.data
            });
    }
}
export function setDragData(data: any) {
    console.log('setDragData: ',data)
    return async (dispatch:Dispatch) => {
        dispatch({
            type: SET_DRAG_DATA,
        });
    };
}

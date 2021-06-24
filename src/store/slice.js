import { createSelector, createSlice } from "@reduxjs/toolkit";

export const selector = createSelector(
  state => state,
  ({ list, isActiveOnly }) => ({
    isActiveOnly,
    list: list.filter(({ isDone }) => (
      !isActiveOnly || (isActiveOnly && !isDone)
    )),
  })
)

const slice = createSlice({
  name: 'todo',
  initialState: {
    list: [
      { id: 1, value: 'Buy milk', isDone: false },
      { id: 2, value: 'Walking a turtle', isDone: false },
      { id: 3, value: 'Read an interesting book', isDone: false },
      { id: 4, value: 'Go to pool', isDone: true },
    ],
    isActiveOnly: false
  },
  reducers: {
    addListItem: (state, action) => {
      state.list.unshift({
        id: state.list.length + 1,
        value: action.payload,
        isDone: false
      })
    },
    checkListItem: (state, action) => {
      for (let element of state.list) {
        if (element.id === action.payload) {
          element.isDone = !element.isDone
        }
      }
    },
    setActiveOnly: state => {
      state.isActiveOnly = !state.isActiveOnly
    }
  }
})

export default slice.reducer

export const {
  addListItem,
  checkListItem,
  setActiveOnly
} = slice.actions

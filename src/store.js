import { defineStore } from 'pinia'
import defaultBoard from './default-board'
import { uuid } from './utils'

const board = defaultBoard

export const useBoardStore = defineStore('board', {
  state: () => {
    return board
  },
  getters: {
    getTask (state) {
      return (id) => {
        for (const column of state.board.columns) {
          for (const task of column.tasks) {
            if (task.id === id) {
              return task
            }
          }
        }
      }
    }
  },
  actions: {
    createTask ({ tasks, name }) {
      tasks.push({
        name,
        id: uuid(),
        description: ''
      })
    },
    createColumn ({ name }) {
      board.columns.push({
        name,
        tasks: []
      })
    },
    updateTask ({ task, key, value }) {
      task[key] = value
    },
    moveTask ({ fromTasks, toTasks, fromTaskIndex, toTaskIndex }) {
      const taskToMove = fromTasks.splice(fromTaskIndex, 1)[0]
      toTasks.splice(toTaskIndex, 0, taskToMove)
    },
    moveColumn ({ fromColumnIndex, toColumnIndex }) {
      const columnList = board.columns

      const columnToMove = columnList.splice(fromColumnIndex, 1)[0]
      columnList.splice(toColumnIndex, 0, columnToMove)
    }
  }
})

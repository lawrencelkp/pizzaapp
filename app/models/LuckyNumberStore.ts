import { Instance, SnapshotOut, types } from "mobx-state-tree"

export const LuckyNumberStoreModel = types
  .model("LuckyNumberStore")
  .props({
    luckyNumber: types.optional(types.string, ""),
  })
  .actions((store) => ({
    setLuckyNumber(value: string) {
      store.luckyNumber = value
    },
  }))

export interface LuckyNumberStore extends Instance<typeof LuckyNumberStoreModel> {}
export interface LuckyNumberStoreSnapshot extends SnapshotOut<typeof LuckyNumberStoreModel> {}

// @demo remove-file

import { writableLocal } from "./store-localstorage"

const data = writableLocal<string>("data")

export { data }
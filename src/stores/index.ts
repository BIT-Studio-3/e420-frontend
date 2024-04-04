// calls function and stores token in data variable
import { writableLocal } from "./store-localstorage"

const data = writableLocal<string>("data")

export { data }
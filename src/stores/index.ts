// calls function and stores token in data variable
import { writableLocal } from "./store-localstorage"

const token = writableLocal<string>("data")

export { token }
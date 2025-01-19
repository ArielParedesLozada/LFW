
import { Example } from "../models/Example.js"
//Controller logic
//Example
const select = async (id) => {
    await Example.sync()
    const Example_item = await Example.findOne({
        where: {
            id: id
        }
    })
    if (Example_item) {
        return {
            ok: true,
            data: Example_item
        }
    } else {
        return {
            ok: false,
            error: "Error"
        }
    }
}
const ExampleController = {
    select,
}

export { ExampleController }
    

import { rest } from 'msw'
const endpoint = 'https://localhost:44321/api/emp'
export const handlers = [
  rest.get(endpoint, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        "Id": 2,
        "Name": "Rajeswari",
        "Role": "SSD",
        "Mname": "Bharani"
    })
    )
  }),
]
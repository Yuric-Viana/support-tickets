export function index({ request, response, database }) {
    let { status } = request.query

    const filters = status ? { status } : null

    let tickets = database.select('tickets', filters)    

    return response.end(JSON.stringify(tickets))
}
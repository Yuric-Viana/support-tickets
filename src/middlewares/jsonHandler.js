export async function jsonHandler({ request, response }) {
    const buffers = []

    for await (const chunk of request) {
        buffers.push(chunk)
    }
    
    const data = Buffer.concat(buffers).toString()

    try {
        request.body = data ? JSON.parse(data) : {}

    } catch (error) {
        console.log(error);
        request.body = null
    }

    response.setHeader('Content-Type', 'application/json')
}
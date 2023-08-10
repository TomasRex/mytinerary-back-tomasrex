const eventscontroller = {
    getEvents : (request, response, next) =>{
        response.json({
            response: '',
            success: true,
            error: null
        })
    }
}

export default eventscontroller
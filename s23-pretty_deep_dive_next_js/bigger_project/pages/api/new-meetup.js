// api/new-meetup

function handler(req, res) {
    if(req.method === 'POST'){
        const data = req.body;

        const {title, description, address, image} = data;
    }

    

    /* res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({
        status: "ok",
        message: "Meetup created successfully"
    })); */
}

export default handler;
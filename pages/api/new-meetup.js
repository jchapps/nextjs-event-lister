function handler(req, res) {
  if (req.method === "POST") { //posts from api/meetup
    const data = req.body;


    const {title, image, address, description} = data
  }
}

export default handler;

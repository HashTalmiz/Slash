import { Router, Response, Request } from "express";
import URL from "../../models/Url";
import HttpStatusCodes from "http-status-codes";

const router: Router = Router();


router.post("/", async (req: Request, res: Response) => {
    try{
        const urlData = await URL.findOne({ fullURL: req.body.fullURL });
        if (urlData) 
            return res.json(urlData.shortURL);

        const url = await URL.create({ fullURL: req.body.fullURL });
        res.json(url.shortURL);
    }
    catch(err)
    {
        console.log(err)
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
})



export default router;
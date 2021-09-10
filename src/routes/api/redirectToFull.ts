import { Router, Response, Request } from "express";
import URL from "../../models/Url";
import HttpStatusCodes from "http-status-codes";

const router: Router = Router();

router.get("/:shortUrl", async (req: Request, res: Response) => {
    
   const urlData = await URL.findOne({ shortURL: req.params.shortUrl });
   if (urlData == null) 
   {
      return res.status(HttpStatusCodes.BAD_REQUEST).send("URL does not exist")
   }
    
   urlData.clicks++;
   urlData.save();

   res.json(urlData.fullURL);
});

export default router;
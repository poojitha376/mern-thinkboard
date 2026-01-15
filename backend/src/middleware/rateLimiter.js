import ratelimit from "../config/upstash.js"

const rateLimiter = async (req,res,next) => {
    try{
        const {success} = await ratelimit.limit("my-rate-limit") //ratelimited specifically by userid , else my-rate-limit will limit everybody together
        //but we do not have access to userid since we do not yet have auth

        if(!success){
            return res.status(429).json({message:"Too many requests, please try again later"})
        }
        next()
    } catch(error){
       console.log("Rate limit error", error)
       next(error) 
    }
}

export default rateLimiter;
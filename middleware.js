function authMiddleware(req,res,next){

    const token = req.headers.token
    
        if(!token){
    
            res.status(403).send({
                message:"You are not logged in"
            })
            return;
        }
    
        const decoded = jwt.verify(token,"dhruv712")
        const username = decoded.username
    
        if(!username){
            res.status(401).send({
                message:"Malfunctioned JWT"
            })
    
            return;
        }
        
        req.username = username //modifying the request obj.
        next()
}

module.exports = {
    authMiddleware
}
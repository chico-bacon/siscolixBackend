import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET

const auth = (req, res, next) => {
    const token = req.headers.authorization

    if(!token) {
        return res.status(401).json({ message:"Acesso negado!" })
    }

    try {
        const decodedToken = jwt.verify(token.replace('Bearer ', ''), JWT_SECRET);
        console.log(decodedToken);
    } catch(error) {
        res.status(401).json({ message:"Autenticação Invalida!" })
        console.log(error);
    }

    next()
}

export default auth
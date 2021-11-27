import jwt from 'jsonwebtoken';

// console.log(JWT_TOKEN);
export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_TOKEN || 'secret',
    {
      expiresIn: '30d',
    }
  );
};

// Middleware to authenticate user
export const isAuth = (req, res, next) => {
  // to get the authorization fields from headers of request
  const authorization = req.headers.authorization;
  if (authorization) {
    // Bearer XXXXXXXX (get rid of bearer part)
    const token = authorization.slice(7, authorization.legnth);

    // decrypt token
    jwt.verify(token, process.env.JWT_TOKEN || 'secret', (err, decode) => {
      if (err) {
        res.status(401).send({ message: 'Invalid Token' });
      } else {
        // by calling next() we pass user as a propert of req to next middleware
        req.user = decode;
        next();
      }
    });
  } else {
    res.status(401).send({ message: 'No Token' });
  }
};

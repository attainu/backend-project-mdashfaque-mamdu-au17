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
    process.env.JWT_TOKEN,
    {
      expiresIn: '30d',
    }
  );
};
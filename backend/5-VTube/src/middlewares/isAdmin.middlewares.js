import ApiError from '../utils/apiError.js';
const isAdmin = (req, res, next) => {
  if (req.user?.role !== 'Admin') {
    throw new ApiError(403, 'Access denied. Admins only.');
  }
  next();
};

export default isAdmin;

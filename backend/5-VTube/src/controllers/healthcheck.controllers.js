import ApiResponse from '../utils/apiResponse.js';
import asycnHandler from '../utils/asyncHandler.js';

const healthCheckRoutes = asycnHandler(async (request, response) => {
  return response
    .status(200)
    .json(new ApiResponse(200, 'Health check passed!', 'OK'));
});

export default healthCheckRoutes;

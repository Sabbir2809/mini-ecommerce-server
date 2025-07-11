exports.successResponse = (
  res,
  statusCode = 200,
  message = "Success",
  meta = null,
  data = null
) => {
  const response = {
    success: true,
    statusCode,
    message,
  };

  if (meta) response.meta = meta;
  if (data !== null) response.data = data;

  return res.status(statusCode).json(response);
};

exports.errorResponse = (
  res,
  statusCode = 500,
  message = "Something went wrong"
) => {
  return res.status(statusCode).json({ success: false, statusCode, message });
};

const requestTime = (req, res, next) => {
  const current = new Date(Date.now());
  req.requestTime = current;
  console.log(current.toUTCString());
  next();
}

const requestInfo = (req, res, next) => {
  console.log(req.method, ": ", req.url);
  next();
}

module.exports = {
  requestInfo: requestInfo,
  requestTime: requestTime
}
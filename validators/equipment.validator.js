module.exports = (req, res, next) => {
  const { name, type, status, lastCleaned } = req.body;

  if (!name || !type || !status || !lastCleaned) {
    return res.status(400).json({ message: "All fields are required" });
  }

  next();
};

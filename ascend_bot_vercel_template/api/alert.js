module.exports = async (req, res) => {
  const { query } = req;
  const message = query.message || "Ascend Bot Alert Triggered";
  const phone = query.phone || "17865601891"; // Default phone
  const apiKey = query.apikey || "4709090"; // Replace with your actual key

  // Use the global fetch implementation available in modern Node versions
  const fetch = global.fetch || (await import('node-fetch')).default;
  const url = `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${encodeURIComponent(message)}&apikey=${apiKey}`;

  try {
    const response = await fetch(url);
    const text = await response.text();
    res.status(200).send(`Alert sent: ${text}`);
  } catch (error) {
    res.status(500).send("Failed to send message: " + error.toString());
  }
};

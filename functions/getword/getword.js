const randomWords = require("random-words");

async function getWord() {
  return Promise.resolve(`Hello ${randomWords().toUpperCase()}`);
}
exports.handler = async (event, context) => {
  try {
    const body = await getWord();
    return {
      statusCode: 200,
      body
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: err.toString()
    };
  }
};
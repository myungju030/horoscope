const axios = require("axios");
const cheerio = require("cheerio");
require("dotenv").config();

const getHTML = async (keyword) => {
  try {
    return await axios.get(`${process.env.URL}${encodeURI(keyword)}자리운세`);
  } catch (err) {
    console.log(err);
  }
};
const parsing = async (keyword) => {
  try {
    const html = await getHTML(keyword);
    if (html !== undefined) {
      const $ = cheerio.load(html.data);
      const $courseList = $(".wrap_result");
      let courses = [];
      $courseList.each((idx, node) => {
        const content = $(node).text();
        courses.push(content);
      });

      return courses;
    }
  } catch (err) {
    console.log(err);
  }
};

const dataController = {
  findByKeyword: async (req, res) => {
    const { keyword } = req.params;
    let data = await parsing(keyword);
    return res.status(200).send(data);
  },
};

module.exports = {
  dataController,
};

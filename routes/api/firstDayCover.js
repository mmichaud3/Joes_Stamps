const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/User');

const FirstDayCover = require('../../models/FirstDayCover');

// @route  post api/
// @desc   Add firstDayCover
// @access Private

router.post('/', [auth], async (req, res) => {
  const {
    scottNum,
    collinsNum,
    title,
    issueDate,
    year,
    description,
    location,
    price,
    value,
    partOfSet,
    quantity,
    group,
    chachetmaker,
    series,
    denomination,
    format,
    variety,
  } = req.body;

  const fdcFields = {};
  fdcFields.user = req.user.id;

  if (scottNum) fdcFields.scottNum = scottNum;
  if (collinsNum) fdcFields.collinsNum = collinsNum;
  if (title) fdcFields.title = title;
  if (year) fdcFields.year = year;
  if (description) fdcFields.description = description;
  if (location) fdcFields.location = location;
  if (price) fdcFields.price = price;
  if (value) fdcFields.value = value;
  if (partOfSet) fdcFields.partOfSet = partOfSet;
  if (group) fdcFields.group = group;
  if (quantity) fdcFields.quantity = quantity;
  if (issueDate) fdcFields.issueDate = issueDate;
  if (chachetmaker) fdcFields.chachetmaker = chachetmaker;
  if (series) fdcFields.series = series;
  if (denomination) fdcFields.denomination = denomination;
  if (format) fdcFields.format = format;
  if (variety) fdcFields.variety = variety;

  try {
    let firstDayCover = await FirstDayCover.findOne({
      scottNum,
    });

    if (firstDayCover) {
      firstDayCover = await FirstDayCover.findOneAndUpdate(
        { scottNum },
        { $set: fdcFields },
        { new: true }
      );
      return res.json(firstDayCover);
    }

    // create
    firstDayCover = new FirstDayCover(fdcFields);

    await firstDayCover.save();
    res.json(firstDayCover);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route  GET api/firstDayCover
// @desc   Get all covers
// @access Private
router.get('/', [auth], async (req, res) => {
  try {
    const firstDayCovers = await FirstDayCover.find();
    res.json(firstDayCovers);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route  GET api/firstDayCover/scottNum
// @desc   Get firstDayCover by scottNum
// @access private
router.get('/:scottNum', [auth], async (req, res) => {
  try {
    const firstDayCover = await FirstDayCover.findOne({
      scottNum: req.params.scottNum,
    });

    if (!firstDayCover) {
      return res.status(400).json({ msg: 'First Day Cover not found' });
    }

    res.json(firstDayCover);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Profile not found' });
    }

    res.status(500).send('Server Error');
  }
});

// @route  DELETE api/firstDayCover
// @desc   Delete firstDayCover
// @access Private
router.delete('/:scottNum', auth, async (req, res) => {
  try {
    // Remove profile
    await FirstDayCover.findOneAndRemove({ scottNum: req.params.scottNum });

    res.json({ msg: 'First Day Cover deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

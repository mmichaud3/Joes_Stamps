const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator/check');

const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route  GET api/profile/me
// @desc   Get current users profile
// @access Private
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate('user', ['name']);

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route  POST api/profile
// @desc   Create or update a user profile
// @access Private
router.post(
  '/',
  [auth, [check('location', 'Location is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { location, bio } = req.body;

    // Build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    if (location) profileFields.location = location;
    if (bio) profileFields.bio = bio;

    try {
      let profile = await Profile.findOne({ user: req.user.id });

      if (profile) {
        // update
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );

        return res.json(profile);
      }

      // create
      profile = new Profile(profileFields);

      await profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route  GET api/profile
// @desc   Get all profiles
// @access Public
router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find().populate('user', ['name', 'avatar']);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route  GET api/profile/user/:user_id
// @desc   Get profile by user id
// @access Public
router.get('/user/:user_id', async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id,
    }).populate('user', ['name', 'avatar']);

    if (!profile) {
      return res.status(400).json({ msg: 'Profile not found' });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Profile not found' });
    }

    res.status(500).send('Server Error');
  }
});

// @route  DELETE api/profile
// @desc   Delete profile, user & posts
// @access Private
router.delete('/', auth, async (req, res) => {
  try {
    // Remove profile
    await Profile.findOneAndRemove({ user: req.user.id });
    // remove user
    await User.findOneAndRemove({ _id: req.user.id });

    res.json({ msg: 'User deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route  put api/
// @desc   Add firstDayCover
// @access Private

router.put(
  '/fdcs',
  [auth, [check('scottNum', 'Scott number is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
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

    const fdcFields = {
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
    };

    try {
      const profile = await Profile.findOne({ user: req.user.id });

      profile.fdcs.unshift(fdcFields);
      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route  GET api/firstDayCover
// @desc   Get all covers
// @access Private
// router.get('/', [auth], async (req, res) => {
//   try {
//     const firstDayCovers = await FirstDayCover.find().populate([
//       'scottNum',
//       'collinsNum',
//       'title',
//     ]);
//     res.json(firstDayCovers);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });

// @route  GET api/firstDayCover/scottNum
// @desc   Get firstDayCover by scottNum
// @access private
// router.get('/:scottNum', [auth], async (req, res) => {
//   try {
//     const firstDayCover = await FirstDayCover.findOne({
//       scottNum: req.params.scottNum,
//     });

//     if (!firstDayCover) {
//       return res.status(400).json({ msg: 'First Day Cover not found' });
//     }

//     res.json(firstDayCover);
//   } catch (err) {
//     console.error(err.message);
//     if (err.kind == 'ObjectId') {
//       return res.status(400).json({ msg: 'Profile not found' });
//     }

//     res.status(500).send('Server Error');
//   }
// });

// @route  DELETE api/firstDayCover
// @desc   Delete firstDayCover
// @access Private
router.delete('/fdcs/:fdc_id', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });

    // Get remove index
    const removeIndex = profile.fdcs
      .map((item) => item.id)
      .indexOf(req.params.exp_id);

    profile.education.splice(removeIndex, 1);

    await profile.save();

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

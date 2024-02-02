const { mongoose } = require("mongoose");
const express = require("express");
const router = express.Router();
const { Account } = require("../db");
const { authMiddleware } = require("../middleware");

router.get("/balance", authMiddleware, async (req, res) => {
  try {

    const account = await Account.findOne({
      userId: req.userId,
    });

    if (!account) {
      return res.status(403).json({
        msg: "Invalid userId",
      });
    }

    res.status(200).json({
      balance: account.balance,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Server Error",
    });
  }
});


router.post("/transfer", authMiddleware, async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  const { amount, to } = req.body;
  const account = await Account.findOne({ userId: req.userId }).session(
    session
  );
  if (!account || account.balance < amount) {
    await session.abortTransaction();
    res.status(400).json({
      message: "Insufficient balance",
    });
  }

  const toAccount = await Account.findOne({ userId: to }).session(session);
  if (!toAccount) {
    await session.abortTransaction();
    res.status(400).json({
      message: "Invalid Account",
    });
  }
  await Account.updateOne(
    {
      userId: req.userId,
    },
    {
      $inc: {
        balance: -amount,
      },
    }
  );
  await Account.updateOne(
    {
      userId: to,
    },
    {
      $inc: {
        balance: amount,
      },
    }
  );
  await session.commitTransaction();
  res.status(200).json({
    message: "Transfer successful",
  });
});

module.exports = router;

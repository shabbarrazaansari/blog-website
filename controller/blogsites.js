const express = require("express");

const submitdata = require("../models/submit");
const fans = require("../models/comment");

exports.home = (req, res, next) => {
  res.status(200).send("hello bhai");
};
exports.bgdata = async (req, res, next) => {
  console.log(req.body);
  const Title = req.body.Title;
  const Author = req.body.Author;
  const Content = req.body.Content;
  try {
    const data = await submitdata.create({
      title: Title,
      author: Author,
      content: Content,
    });
    res.status(200).json({ userdetails: data });
  } catch (error) {
    console.log(error);
  }
};

exports.getblogdata = async (req, res, next) => {
  try {
    const getdata = await submitdata.findAll();
    res.status(200).json({ blogdata: getdata });
  } catch (error) {
    console.log(error);
  }
};

exports.postcomment = async (req, res, next) => {
  const postcomment = req.body.comment;
  const blogId = req.body.blogId;
  console.log(postcomment);
  try {
    const getBlog = await submitdata.findByPk(blogId);
    const postComment = await fans.create({ comment: postcomment });

    const datafans = await getBlog.addComments(postComment);
    res.status(200).json({ fanscomment: postComment });
  } catch (error) {
    console.log(err);
  }
};
exports.getcommentdata = async (req, res, next) => {
  try {
    const commentdata = await submitdata.findAll({ include: fans });
    res.status(200).json({ commentusers: commentdata });
  } catch (error) {
    console.log(err);
  }
};

exports.delete = async (req, res, next) => {
  const uid = req.params.id;
  console.log(uid);
  try {
    await fans.destroy({ where: { id: uid } });
    console.log("deleted");
  } catch (error) {
    console.log(err);
  }
};


const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/check-auth")
const extractFile = require("../middleware/file")
const PostController = require("../controllers/posts")

router.post("",
checkAuth,
extractFile,
PostController.createPosts
)

//put or patch to update an existing resource
router.put("/:id",
checkAuth,
extractFile,
PostController.updatePost
)

router.get('',PostController.getPosts)

router.delete("/:id",checkAuth, PostController.deletePost)

router.get("/:id",PostController.getPost)

module.exports = router

import multer from "multer";
import nextConnect from "next-connect";
import Gallery from "../../models/Gallery";
import Property from "../../models/Property";

const addImages = nextConnect({
  onNoMatch(req, res) {
    res.status(405).json({
      error: "Method not allowed!",
    });
  },
});

const upload = multer({
  storage: multer.diskStorage({
    // destination: "./public/assets/uploads",
    destination: function (req, file, cb) {
      cb(null, "./public/assets/uploads/images");
    },
    filename: function (req, file, cb) {
      // null as first argument means no error
      cb(null, Date.now() + "-" + file.originalname);
    },
  }),
});

const uploadMiddleware = upload.any("images");

addImages.use(uploadMiddleware);

addImages.post(async (req, res) => {
  let success = false;
  const pid = req.query.property;
  console.log(req.files);
  const property = await Property.findById(pid);
  if (!property) {
    success = false;
    return res.status(404).json({ success, error: "Property does not exist!" });
  }

  for (let image of req.files) {
    await Gallery.create({
      category: "thumbnail",
      subCategory: "utils",
      link: image.filename,
      property: pid
    });
  }

  return res.status(200).json({ success: true });
});

// const addImages = async (req, res) => {
//   if (req.method === "POST") {
//     const pid = req.query.property;

//     for (let image of images) {
//     }
//   } else {
//     return res.status(405).json({ error: "Method not allowed!" });
//   }
// };

module.exports = addImages;

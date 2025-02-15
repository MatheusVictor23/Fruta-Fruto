import multer from "multer";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import path from "path";


// Configuração do armazenamento
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "../../uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage });

export default upload;
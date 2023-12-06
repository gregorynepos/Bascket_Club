import pool from "../config/database.js";


const MediaControllers = (req, res) => {
    pool.query(
        `SELECT medias FROM images`,
        function (error, actu, fields) {
            console.log(error);
            console.log(actu);
            res.json(actu);
        },
    );
};
export default MediaControllers;
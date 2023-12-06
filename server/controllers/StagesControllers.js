import pool from "../config/database.js";


const StagesControllers = (req, res) => {
    pool.query(
        `SELECT * FROM stages`,
        function (error, actu, fields) {
            console.log(error);
            console.log(actu);
            res.json(actu);
        },
    );
};
export default StagesControllers;
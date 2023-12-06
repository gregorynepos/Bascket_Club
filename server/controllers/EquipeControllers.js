import pool from "../config/database.js";


const EquipeControllers = (req, res) => {
  pool.query(
    `SELECT * FROM equipes`,
    function (error, actu, fields) {
      console.log(error);
      console.log(actu[0]);
      res.json(actu);
    },
  );
};
export default EquipeControllers;  
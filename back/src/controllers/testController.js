const pool = require('../configs/dbConfig');


const teste = async (req, res) => {
    try {
        const consulta = (await pool.query(`select version()`)).rows;
        res.status(200).json(
            {
                Backend: "Sisdoc on-line",
                Database: {
                    status: "Online",
                    versao: consulta[0].version
                }
            }
        )
    } catch (error) {
        res.status(500).json({
            error: "Erro na rota de teste",
            mensagem: error.message
        });
    }
};

module.exports = {
    teste
}
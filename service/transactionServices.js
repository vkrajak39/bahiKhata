const { conn } = require('../database/connection');

const getAllTransactions = async () => {
    return new Promise((resolve, reject) => {
        conn.connect((error) => {
            if (error) return reject(error);

            console.log("Connected to db successfully");

            let sql = "SELECT * FROM transaction";

            conn.query(sql, (error, results) => {
                if (error) return reject(error);

                console.log("Results: ", results.length);

                // conn.close(); // Close the connection after the query
                resolve(results);
            });
        });
    });
};


const addRecord = async (record)=>{

    return new Promise((resolve,reject)=>{

        conn.connect((error)=>{

            if(error) return reject(error);

            console.log("Connected to db successfully");

            let sql = `Insert into  transaction(transaction_type_id,amount,notes,date,time,bill_number,user_id,customer_id) values('${record.transaction_type_id}','${record.amount}','${record.notes}','${record.date}','${record.time}','${record.bill_number}','${record.user_id}','${record.customer_id}');`;

            conn.query(sql,(error,result)=>{
                if(error) return reject(error);

                console.log('query executed successfully ');

                console.log("inserted record object ");

                resolve(result);
            });


        });

    });

};



module.exports = { getAllTransactions ,addRecord };



















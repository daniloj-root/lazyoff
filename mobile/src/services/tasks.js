import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('database.db');
export class TaskService {
  static addData(param) {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(
            `insert into task (name, startDateTime, endDateTime, status, categoria_id) 
                values (?)`,
            [
              param.name,
              param.startDateTime,
              param.endDateTime,
              param.status,
              params.categoria_id,
            ],
            (_, { insertId, rows }) => {
              console.log(`id insert: ${insertId}`);
              resolve(insertId);
            }
          ),
            (sqlError) => {
              console.log(sqlError);
            };
        },
        (txError) => {
          console.log(txError);
        }
      )
    );
  }

  static findById(id) {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(
            `select t.name, t.status, t.startDateTime, t.endDateTime, c.name
                           from task as t
                           inner join category as c
                           on t.category_id = category.id
                           where id= ?`,
            [id],
            (_, { rows }) => {
              resolve(rows);
            }
          ),
            (sqlError) => {
              console.log(sqlError);
            };
        },
        (txError) => {
          console.log(txError);
        }
      )
    );
  }

  static getAll() {
<<<<<<< HEAD
    const sql = `SELECT t.nome, t.status, t.startDateTime, t.endDateTime, c.name
=======
  let sql = `SELECT t.nome, t.status, t.startDateTime, t.endDateTime, c.name
>>>>>>> 3388827a12204e7d31595f7e3b51bb5208afb9c9
  FROM task as t
  INNER JOIN category as c
  ON t.category_id = category.id`;

    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          console.log(`get all tasks : ${sql}`);
          return (
            tx.executeSql(sql, [], (_, { rows }) => {
              resolve(rows);
            }),
            (sqlError) => {
              console.log(sqlError);
            }
          );
        },
        (txError) => {
          console.log(txError);
        }
      )
    );
  }

  static updateById(params) {
    this.getById(); // gets by id, compare, then update

    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(
            `update task set ? = ? where id = ?;`,
            [param.param, param.value, param.id],
            () => {}
          ),
            (sqlError) => {
              console.log(sqlError);
            };
        },
        (txError) => {
          console.log(txError);
        }
      )
    );
  }

  static deleteById(id) {
    db.transaction(
      (tx) => {
        tx.executeSql(
          `delete from ${table} where id = ?;`,
          [id],
          (_, { rows }) => {}
        ),
          (sqlError) => {
            console.log(sqlError);
          };
      },
      (txError) => {
        console.log(txError);
      }
    );
  }
}

import { SQLite } from 'expo';


const db = SQLite.openDatabase('db.dev_disasterDB');
export class Database extends component{
    componentDidMount(){
        // db.transaction(tx=> {
        //     tx.executeSql(
        //         'CREATE TABLE '
        //     )
        // })
    }
}
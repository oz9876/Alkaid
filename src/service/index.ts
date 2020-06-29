import { resolve, reject } from 'q';

let db: any;

type BaseSetType = {
    id: number
    name: string
    bgimg: string
};

export const initDB = function(
    dbName: string,
    dbTable: string,
    dbTableConfig: any,
    tableIndexs: any,
){
    let dbRequest = window.indexedDB.open(dbName)
    return new Promise((resolve,reject)=>{
        dbRequest.onsuccess = function(e:any){
            console.log(dbRequest.result)
            db = dbRequest.result;
            resolve()
        }
        dbRequest.onerror = function(e:any){
            reject()
        }
        // 数据库升级和新建时触发
        dbRequest.onupgradeneeded = function(e:any){ 
            console.log('onupgradeneeded: ', e.target.result)
            db = e.target.result;
            // 建表
            if(dbTable && !db.objectStoreNames.contains(dbTable) ){
                let objectStore = db.createObjectStore(dbTable,dbTableConfig);
                for (let { name, keyPath, options } of tableIndexs) {
                    objectStore.createIndex(name, keyPath, options);
                }
            }
            setTimeout(resolve,1000)
        }
    })
}

export const addBaseSet = (
    params:{
        data: BaseSetType
    }
) => {
    console.log(db)
    db.transaction(['baseset'], 'readwrite')
    .objectStore('baseset').add(params.data)
}

export const getBaseSet = (
    resolve:any
) => {
    console.log(db)
    let infos: any[] = [];
    db.transaction(['baseset'], 'readwrite')
    .objectStore('baseset').openCursor().onsuccess = function(e:any){
        const cursor = e.target.result;
        if (cursor) {
            infos.push({ id: cursor.key, ...cursor.value });
            cursor.continue();
         } else {
           console.log('没有更多数据了！');
           resolve(infos)
         }
    }
}
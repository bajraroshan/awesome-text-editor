import { openDB } from "idb";

const initdb = async () =>
  openDB("ate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("ate")) {
        console.log("ate database already exists");
        return;
      }
      db.createObjectStore("ate", { keyPath: "id", autoIncrement: true });
      console.log("ate database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const ateDb = await openDB("ate", 1);
  const tx = ateDb.transaction("ate", "readwrite");
  const store = tx.objectStore("ate");
  const request = store.put({ id: 1, content: content });
  const result = await request;
  console.log("🚀 - data saved to the database", result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getData = async () => {
  console.log("GET from the database");
  const ateDb = await openDB("ate", 1);
  const tx = ateDb.transaction("ate", "readonly");
  const store = tx.objectStore("ate");
  const request = store.getAll();
  const result = await request;
  console.log("result.value", result[0].content);
  return result[0].content;
};

initdb();
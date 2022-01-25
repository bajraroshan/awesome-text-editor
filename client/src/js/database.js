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
  console.error("putDb not implemented");
  const ateDb = await openDB("ate", 1);
  const tx = ateDb.transaction("ate", "readwrite");
  const store = tx.objectStore("ate");
  const request = store.put({ id: 1, text: content });
  const result = await request;
  console.log("data saved to the database", result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.error("getDb not implemented");
  const ateDb = await openDB("ate", 1);
  const tx = ateDb.transaction("ate", "readonly");
  const store = tx.objectStore("ate");
  const request = store.getAll();
  const result = await request;
  console.log("result.value", result);
  return result?.value;
};

initdb();

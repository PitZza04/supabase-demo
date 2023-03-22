import { createClient } from "@supabase/supabase-js";
import { StorageClient } from "@supabase/storage-js";

const STORAGE_URL = "https://tpbrgzfczohtyssijgxb.supabase.co/storage/v1";
const SERVICE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwYnJnemZjem9odHlzc2lqZ3hiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3ODMzMDI2NywiZXhwIjoxOTkzOTA2MjY3fQ.5ZYnrxx0H9bG0XZTSGgwI8LN88jwfXGPzMCYYtbHpHk";
//const SERVICE_KEY ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwYnJnemZjem9odHlzc2lqZ3hiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgzMzAyNjcsImV4cCI6MTk5MzkwNjI2N30.krkfQuQJQ4kb5IhsZ8Nesv1UpWEWhvD4h4MP5FZiueo");
const supabase = createClient(STORAGE_URL, SERVICE_KEY);
const storageClient = new StorageClient(STORAGE_URL, {
  apikey: SERVICE_KEY,
  Authorization: `Bearer ${SERVICE_KEY}`,
});

const Main = async () => {
  //const { data, error } = await supabase.storage.getBucket("vehicle/brands");
  //const { data, error } = await storageClient.getBucket("vehicle");
  //const { data, error } = await storageClient.listBuckets();
  //const { data, error } = await storageClient.from("vehicle").list("brands");
  // const { data, error } = await supabase.storage.listBuckets();
  //   const { data } = supabase.storage
  //     .from("public-bucket")
  //     .getPublicUrl("brands");
  //   //console.log("error", error);
  //   console.log(data);
  //   const { data, error } = await supabase.storage
  //     .from("vehicle")
  //     .list("folder", {
  //       limit: 100,
  //       offset: 0,
  //       sortBy: { column: "name", order: "asc" },
  //     });
  //const { data } = await supabase.storage.from("vehicle");
  //const { data } = await storageClient.from("public").getPublicUrl("brands");
  const { data, error } = await supabase.storage
    .from("vehicle")
    .list("brands/", {
      limit: 100,
      offset: 0,
      sortBy: { column: "name", order: "asc" },
    });
  console.log("error", error);
  console.log(data);
};
Main();

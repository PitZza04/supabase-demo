import { createClient } from "@supabase/supabase-js";
import { StorageClient } from "@supabase/storage-js";
import * as fs from "fs";
const STORAGE_URL = "https://tpbrgzfczohtyssijgxb.supabase.co/storage/v1";
const SUPABASE_URL = "https://tpbrgzfczohtyssijgxb.supabase.co";
//const SERVICE_KEY ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwYnJnemZjem9odHlzc2lqZ3hiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3ODMzMDI2NywiZXhwIjoxOTkzOTA2MjY3fQ.5ZYnrxx0H9bG0XZTSGgwI8LN88jwfXGPzMCYYtbHpHk";
const SERVICE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwYnJnemZjem9odHlzc2lqZ3hiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgzMzAyNjcsImV4cCI6MTk5MzkwNjI2N30.krkfQuQJQ4kb5IhsZ8Nesv1UpWEWhvD4h4MP5FZiueo";
const supabase = createClient(SUPABASE_URL, SERVICE_KEY);
const storageClient = new StorageClient(STORAGE_URL, {
  apikey: SERVICE_KEY,
  Authorization: `Bearer ${SERVICE_KEY}`,
});
//https://tpbrgzfczohtyssijgxb.supabase.co/storage/v1/object/public/vehicle/brands/ford.png
const Main = async () => {
  const { data, error } = await supabase
    .from("Brand")
    .select("name, Model(name)")
    .order("name", { ascending: true });
  //   console.log("error", error);
  //   if (error) {
  //     console.error(error);
  //   } else {
  //     fs.writeFile("brands.json", JSON.stringify(data), (err) => {
  //       if (err) {
  //         console.error(`Error writing to file: ${err}`);
  //       } else {
  //         console.log("Data written to file successfully!");
  //       }
  //     });
  //   }

  const newData = data?.map((brand) => {
    return {
      ...brand,
      img_url: `https://tpbrgzfczohtyssijgxb.supabase.co/storage/v1/object/public/vehicle/brands/${brand.name}.png`,
      Model: brand.Model.map((model) => {
        return {
          ...model,
          img_url: `https://tpbrgzfczohtyssijgxb.supabase.co/storage/v1/object/public/vehicle/models/${
            brand.name
          }/${model.name.replace(/ /g, "%20")}.png`,
        };
      }),
    };
  });

  fs.writeFile("brands.json", JSON.stringify(newData), (err) => {
    if (err) {
      console.error(`Error writing to file: ${err}`);
    } else {
      console.log("Data written to file successfully!");
    }
  });

  //   let publicUrl = [];
  //   data?.map((brand) => {
  //     if (brand.Model !== null && brand.Model.length != 0) {
  //       const modelList = brand.Model.reduce((model, item) => {
  //         model.push({ brand: brand.name, model: item.name });
  //         return model;
  //       }, []);
  //       publicUrl.push(modelList);
  //     } else {
  //       publicUrl.push({ brand: brand.name });
  //     }
  //   });

  //   console.log(publicUrl);
};

Main();

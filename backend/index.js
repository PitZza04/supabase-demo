import dotenv from "dotenv";
dotenv.config();
import bodyParser from "body-parser";
import { default as cors, default as express } from "express";
import { supabase } from "./lib/supabase";
import { createClient } from "@supabase/supabase-js";
const app = express();
const port = process.env.PORT || 2022;
// const supabase = createClient(
//   process.env.SUPABASE_URL,
//   process.env.SUPABASE_ANON_KEY
// );
app.use(cors());
app.use(express.json());

const corsOptions = {
  origin: "*",
  methods: "GET,PUT,PATCH,POST,DELETE",
  optionsSuccessStatus: 200,
};
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.get("/", cors(corsOptions), async (req, res) => {
  const { data } = await supabase.from("Brand").select("*");
  console.log("awse", data);
  res.json(data);
});

app.listen(port, () => {
  console.log(`Listening to http:localhost:${port}`);
});

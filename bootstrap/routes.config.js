import cors from "cors";
import bodyParser from "body-parser";
import indexRoutes from "../routes/web.route.js";

export default (app) => {
    app.use(cors({ origin: true }));
    app.use(bodyParser.json({ limit: "20mb", extended: true }));
    app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));

    app.use("/api/v1", indexRoutes);
}

// Catch anything that slips through before the process exits
process.on("uncaughtException", (err) => {
    console.error("[uncaughtException]", err);
    process.exit(1);
});

process.on("unhandledRejection", (reason) => {
    console.error("[unhandledRejection]", reason);
    process.exit(1);
});

import { PORT, BACKEND_URL } from "./config/envs";
import server from "./server";
import "reflect-metadata";
import { AppDataSource } from "./config/ data-source";

console.log("Starting server...");
console.log("DB_HOST:", process.env.DB_HOST ? "set" : "MISSING");
console.log("DB_NAME:", process.env.DB_NAME ? "set" : "MISSING");
console.log("DB_USERNAME:", process.env.DB_USERNAME ? "set" : "MISSING");
console.log("DB_PASSWORD:", process.env.DB_PASSWORD ? "set" : "MISSING");
console.log("DB_SSL:", process.env.DB_SSL);

AppDataSource.initialize()

    .then(() => {
        console.log("Database connection successful");

        server.listen(PORT, () =>{
            console.log(`server listening on PORT: ${PORT}`);
            startKeepAlive();
        })
    })
    .catch((err) => {
        console.error("[DB init failed]", err);
        process.exit(1);
    })


// Keep-alive: pings /health every 14 minutes so Render never idles the instance
function startKeepAlive() {
    if (!BACKEND_URL) {
        console.log("BACKEND_URL not set — keep-alive ping disabled");
        return;
    }

    const INTERVAL_MS = 14 * 60 * 1000; // 14 minutes

    setInterval(async () => {
        try {
            const res = await fetch(`${BACKEND_URL}/health`);
            console.log(`[keep-alive] ping → ${res.status}`);
        } catch (err) {
            console.error("[keep-alive] ping failed:", err);
        }
    }, INTERVAL_MS);

    console.log(`[keep-alive] pinging ${BACKEND_URL}/health every 14 min`);
}


   





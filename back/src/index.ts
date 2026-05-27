import { PORT, BACKEND_URL } from "./config/envs";
import server from "./server";
import "reflect-metadata";
import { AppDataSource } from "./config/ data-source";


AppDataSource.initialize()

    .then(() => {
        console.log("Database connection successful");

        server.listen(PORT, () =>{
            console.log(`server listening on PORT: ${PORT}`);
            startKeepAlive();
        })
    })
    .catch((err) => {
        console.log(err);
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


   





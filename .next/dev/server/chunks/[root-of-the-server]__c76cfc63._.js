module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/shared/schema.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "demoBookings",
    ()=>demoBookings,
    "insertDemoBookingSchema",
    ()=>insertDemoBookingSchema,
    "insertUserSchema",
    ()=>insertUserSchema,
    "users",
    ()=>users
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/sql/sql.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/table.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/text.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/varchar.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$date$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/date.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/timestamp.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/indexes.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$zod$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-zod/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/lib/index.mjs [app-route] (ecmascript)");
;
;
;
;
const users = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("users", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("id").primaryKey().default(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`gen_random_uuid()`),
    username: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("username").notNull().unique(),
    password: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("password").notNull()
});
const insertUserSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$zod$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createInsertSchema"])(users).pick({
    username: true,
    password: true
});
const demoBookings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("demo_bookings", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("id").primaryKey().default(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`gen_random_uuid()`),
    bookingDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$date$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["date"])("booking_date").notNull(),
    bookingTime: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("booking_time").notNull(),
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("name").notNull(),
    email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("email").notNull(),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("created_at").defaultNow().notNull()
}, (table)=>[
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uniqueIndex"])("unique_date_time").on(table.bookingDate, table.bookingTime)
    ]);
const insertDemoBookingSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$zod$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createInsertSchema"])(demoBookings).pick({
    bookingDate: true,
    bookingTime: true,
    name: true,
    email: true
}).extend({
    bookingDate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().regex(/^\d{4}-\d{2}-\d{2}$/),
    bookingTime: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().regex(/^\d{1,2}:\d{2}\s?(AM|PM)$/i),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().min(1).max(200),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().email().max(300)
});
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/src/lib/server/db.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "db",
    ()=>db
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$node$2d$postgres$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/node-postgres/driver.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import, [project]/node_modules/pg)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/schema.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$node$2d$postgres$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$node$2d$postgres$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const pool = new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__["default"].Pool({
    connectionString: process.env.DATABASE_URL
});
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$node$2d$postgres$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["drizzle"])(pool, {
    schema: __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
});
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/lib/server/storage.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "MemStorage",
    ()=>MemStorage,
    "storage",
    ()=>storage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/schema.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$server$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/server/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/sql/expressions/conditions.js [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$server$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$server$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
class MemStorage {
    users;
    constructor(){
        this.users = new Map();
    }
    async getUser(id) {
        return this.users.get(id);
    }
    async getUserByUsername(username) {
        return Array.from(this.users.values()).find((user)=>user.username === username);
    }
    async createUser(insertUser) {
        const id = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])();
        const user = {
            ...insertUser,
            id
        };
        this.users.set(id, user);
        return user;
    }
    async getBookingsByDate(date) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$server$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].select().from(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["demoBookings"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["demoBookings"].bookingDate, date));
    }
    async createBooking(booking) {
        const [result] = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$server$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].insert(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["demoBookings"]).values(booking).returning();
        return result;
    }
}
const storage = new MemStorage();
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/src/lib/server/email.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendBookingConfirmation",
    ()=>sendBookingConfirmation,
    "sendBookingNotificationToAdmin",
    ()=>sendBookingNotificationToAdmin,
    "sendContactFormEmail",
    ()=>sendContactFormEmail
]);
// SendGrid integration for sending booking confirmation emails
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sendgrid$2f$mail$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sendgrid/mail/index.js [app-route] (ecmascript)");
;
let connectionSettings;
async function getCredentials() {
    const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
    const xReplitToken = process.env.REPL_IDENTITY ? 'repl ' + process.env.REPL_IDENTITY : process.env.WEB_REPL_RENEWAL ? 'depl ' + process.env.WEB_REPL_RENEWAL : null;
    if (!xReplitToken) {
        throw new Error('X-Replit-Token not found for repl/depl');
    }
    connectionSettings = await fetch('https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=sendgrid', {
        headers: {
            'Accept': 'application/json',
            'X-Replit-Token': xReplitToken
        }
    }).then((res)=>res.json()).then((data)=>data.items?.[0]);
    if (!connectionSettings || !connectionSettings.settings.api_key || !connectionSettings.settings.from_email) {
        throw new Error('SendGrid not connected');
    }
    return {
        apiKey: connectionSettings.settings.api_key,
        email: connectionSettings.settings.from_email
    };
}
async function getUncachableSendGridClient() {
    const { apiKey, email } = await getCredentials();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sendgrid$2f$mail$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].setApiKey(apiKey);
    return {
        client: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sendgrid$2f$mail$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"],
        fromEmail: email
    };
}
function formatDate(dateStr) {
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}
function getDayName(dateStr) {
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('en-US', {
        weekday: 'long'
    });
}
function getFirstName(fullName) {
    return fullName.trim().split(/\s+/)[0];
}
function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
const HOST_NAME = 'Plato Team';
const HOST_TITLE = 'Customer Success';
const HOST_EMAIL = 'hello@platohiring.com';
const TIMEZONE = 'EET (Egypt Time, UTC+2)';
const RESCHEDULE_URL = 'https://platohiring.com/book-demo';
async function sendBookingConfirmation(booking) {
    try {
        const { client, fromEmail } = await getUncachableSendGridClient();
        const formattedDate = formatDate(booking.bookingDate);
        const dayName = getDayName(booking.bookingDate);
        const firstName = getFirstName(booking.name);
        const time = booking.bookingTime;
        const meetLink = booking.meetLink || '';
        const eventLink = booking.eventLink || '';
        const meetLinkRow = meetLink ? `<tr>
           <td style="padding:6px 0;color:#374151;font-size:15px;line-height:1.7;">
             <strong>Meeting link:</strong> <a href="${meetLink}" style="color:#0966A8;text-decoration:none;word-break:break-all;">${meetLink}</a>
           </td>
         </tr>` : '';
        const joinButtonHtml = meetLink ? `<table cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:16px;">
           <tr>
             <td align="center">
               <table cellpadding="0" cellspacing="0">
                 <tr>
                   <td align="center" style="background:#0966A8;border-radius:8px;">
                     <a href="${meetLink}" target="_blank" style="display:inline-block;padding:14px 36px;color:#ffffff;font-size:15px;font-weight:600;text-decoration:none;">
                       Join Google Meet
                     </a>
                   </td>
                 </tr>
               </table>
             </td>
           </tr>
         </table>` : '';
        const calendarButtonHtml = eventLink ? `<table cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:16px;">
           <tr>
             <td align="center">
               <table cellpadding="0" cellspacing="0">
                 <tr>
                   <td align="center" style="background:#ffffff;border:1px solid #d0e3f5;border-radius:8px;">
                     <a href="${eventLink}" target="_blank" style="display:inline-block;padding:12px 28px;color:#0966A8;font-size:14px;font-weight:600;text-decoration:none;">
                       View in Google Calendar
                     </a>
                   </td>
                 </tr>
               </table>
             </td>
           </tr>
         </table>` : '';
        const msg = {
            to: booking.email,
            from: {
                email: fromEmail,
                name: 'Plato'
            },
            subject: `Your Plato demo is confirmed — ${dayName}, ${formattedDate}`,
            html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:Arial,Helvetica,sans-serif;">
  <span style="display:none;font-size:1px;color:#f4f4f5;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">
    ${dayName} at ${time} ${TIMEZONE} — 30 min product walkthrough with the Plato team
  </span>
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#0966A8,#1EA0E2);padding:28px 40px;text-align:center;">
              <h1 style="color:#ffffff;margin:0;font-size:22px;font-weight:700;letter-spacing:-0.5px;">Plato</h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 40px 16px;">
              <p style="color:#111827;margin:0 0 20px;font-size:16px;line-height:1.6;">
                Hi ${escapeHtml(firstName)},
              </p>
              <p style="color:#111827;margin:0 0 24px;font-size:16px;line-height:1.6;">
                Your Plato demo is confirmed.
              </p>

              <!-- Meeting Details Card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0f7ff;border-radius:10px;border:1px solid #d0e3f5;margin-bottom:28px;">
                <tr>
                  <td style="padding:24px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:6px 0;color:#374151;font-size:15px;line-height:1.7;">
                          <strong>When:</strong> ${dayName}, ${formattedDate} &mdash; ${time} ${TIMEZONE}
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;color:#374151;font-size:15px;line-height:1.7;">
                          <strong>Duration:</strong> 30 minutes
                        </td>
                      </tr>
                      ${meetLinkRow}
                      <tr>
                        <td style="padding:6px 0;color:#374151;font-size:15px;line-height:1.7;">
                          <strong>Host:</strong> ${HOST_NAME}, ${HOST_TITLE}
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Join Meeting CTA -->
              ${joinButtonHtml}

              <!-- What we'll cover -->
              <p style="color:#111827;margin:0 0 12px;font-size:15px;font-weight:600;">
                What we'll cover (30 mins):
              </p>
              <table cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td style="padding:4px 0;color:#374151;font-size:14px;line-height:1.7;">
                    &#8226;&nbsp; A quick walkthrough of Plato (candidate flow, scoring, shortlisting)
                  </td>
                </tr>
                <tr>
                  <td style="padding:4px 0;color:#374151;font-size:14px;line-height:1.7;">
                    &#8226;&nbsp; How companies use it for volume roles, campus hiring, and tech hiring
                  </td>
                </tr>
                <tr>
                  <td style="padding:4px 0;color:#374151;font-size:14px;line-height:1.7;">
                    &#8226;&nbsp; Q&amp;A + next steps
                  </td>
                </tr>
              </table>

              <!-- How to prepare -->
              <p style="color:#111827;margin:0 0 12px;font-size:15px;font-weight:600;">
                To get the most out of it, feel free to bring:
              </p>
              <table cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td style="padding:4px 0;color:#374151;font-size:14px;line-height:1.7;">
                    1.&nbsp; A job description you're hiring for (or planning to)
                  </td>
                </tr>
                <tr>
                  <td style="padding:4px 0;color:#374151;font-size:14px;line-height:1.7;">
                    2.&nbsp; Your current hiring workflow (even if it's informal)
                  </td>
                </tr>
              </table>

              <!-- View in Calendar -->
              ${calendarButtonHtml}

              <!-- Reschedule link -->
              <table cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:28px;">
                <tr>
                  <td align="center">
                    <p style="color:#6b7280;font-size:13px;margin:0;">
                      Need to change the time?
                      <a href="${RESCHEDULE_URL}" style="color:#0966A8;text-decoration:underline;">Reschedule or cancel</a>
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Sign-off -->
              <table cellpadding="0" cellspacing="0" style="margin-bottom:8px;border-top:1px solid #e5e7eb;padding-top:24px;">
                <tr>
                  <td style="padding-top:24px;">
                    <p style="color:#374151;font-size:14px;line-height:1.7;margin:0;">
                      See you soon,<br>
                      <strong>${HOST_NAME}</strong><br>
                      <span style="color:#6b7280;">${HOST_TITLE} | Plato</span><br>
                      <span style="color:#6b7280;">
                        <a href="mailto:${HOST_EMAIL}" style="color:#0966A8;text-decoration:none;">${HOST_EMAIL}</a>
                      </span>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 40px;border-top:1px solid #e5e7eb;text-align:center;">
              <p style="color:#9ca3af;font-size:11px;margin:0;line-height:1.6;">
                &copy; ${new Date().getFullYear()} Plato. All rights reserved. | AI-Powered Hiring Platform
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
        };
        await client.send(msg);
        console.log(`Booking confirmation email sent to ${booking.email}`);
        return true;
    } catch (error) {
        console.error('Failed to send booking confirmation email:', error?.response?.body || error.message);
        return false;
    }
}
async function sendContactFormEmail(data) {
    try {
        const { client, fromEmail } = await getUncachableSendGridClient();
        const msg = {
            to: 'info@platohiring.com',
            from: {
                email: fromEmail,
                name: 'Plato Website'
            },
            replyTo: {
                email: data.email,
                name: data.name
            },
            subject: `New Contact Message — ${escapeHtml(data.name)}${data.inquiry ? ` (${escapeHtml(data.inquiry)})` : ''}`,
            html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
          <tr>
            <td style="background:linear-gradient(135deg,#0966A8,#1EA0E2);padding:28px 40px;text-align:center;">
              <h1 style="color:#ffffff;margin:0;font-size:22px;font-weight:700;">New Contact Form Message</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:36px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0f7ff;border-radius:10px;border:1px solid #d0e3f5;margin-bottom:24px;">
                <tr>
                  <td style="padding:24px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:6px 0;color:#374151;font-size:15px;line-height:1.7;">
                          <strong>Name:</strong> ${escapeHtml(data.name)}
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;color:#374151;font-size:15px;line-height:1.7;">
                          <strong>Email:</strong> <a href="mailto:${escapeHtml(data.email)}" style="color:#0966A8;text-decoration:none;">${escapeHtml(data.email)}</a>
                        </td>
                      </tr>
                      ${data.phone ? `<tr>
                        <td style="padding:6px 0;color:#374151;font-size:15px;line-height:1.7;">
                          <strong>Phone:</strong> ${escapeHtml(data.phone)}
                        </td>
                      </tr>` : ''}
                      ${data.inquiry ? `<tr>
                        <td style="padding:6px 0;color:#374151;font-size:15px;line-height:1.7;">
                          <strong>Inquiry Type:</strong> ${escapeHtml(data.inquiry)}
                        </td>
                      </tr>` : ''}
                      ${data.language ? `<tr>
                        <td style="padding:6px 0;color:#374151;font-size:15px;line-height:1.7;">
                          <strong>Language:</strong> ${data.language === 'ar' ? 'Arabic' : 'English'}
                        </td>
                      </tr>` : ''}
                    </table>
                  </td>
                </tr>
              </table>
              <div style="margin-bottom:24px;">
                <p style="color:#111827;font-size:15px;font-weight:600;margin:0 0 8px;">Message:</p>
                <p style="color:#374151;font-size:14px;line-height:1.7;margin:0;white-space:pre-wrap;">${escapeHtml(data.message)}</p>
              </div>
              <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0;">
              <p style="color:#9ca3af;font-size:12px;margin:0;">
                You can reply directly to this email to respond to ${escapeHtml(data.name)}.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 40px;border-top:1px solid #e5e7eb;text-align:center;">
              <p style="color:#9ca3af;font-size:11px;margin:0;">&copy; ${new Date().getFullYear()} Plato. Contact form submission from platohiring.com</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
        };
        await client.send(msg);
        console.log(`Contact form email sent for ${data.name} (${data.email})`);
        return true;
    } catch (error) {
        console.error('Failed to send contact form email:', error?.response?.body || error.message);
        return false;
    }
}
async function sendBookingNotificationToAdmin(booking) {
    try {
        const { client, fromEmail } = await getUncachableSendGridClient();
        const formattedDate = formatDate(booking.bookingDate);
        const time = booking.bookingTime;
        const meetLink = booking.meetLink || 'Not generated';
        const msg = {
            to: 'hello@platohiring.com',
            from: {
                email: fromEmail,
                name: 'Plato Booking System'
            },
            subject: `New Demo Booking — ${escapeHtml(booking.name)} on ${formattedDate} at ${time}`,
            html: `
<div style="font-family:Arial,sans-serif;max-width:500px;padding:20px;">
  <h2 style="color:#0966A8;margin-bottom:16px;">New Demo Booking</h2>
  <p><strong>Name:</strong> ${escapeHtml(booking.name)}</p>
  <p><strong>Email:</strong> <a href="mailto:${escapeHtml(booking.email)}">${escapeHtml(booking.email)}</a></p>
  <p><strong>Date:</strong> ${formattedDate}</p>
  <p><strong>Time:</strong> ${time} ${TIMEZONE}</p>
  <p><strong>Duration:</strong> 30 minutes</p>
  <p><strong>Meeting link:</strong> <a href="${meetLink}">${meetLink}</a></p>
  <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0;">
  <p style="color:#6b7280;font-size:13px;">This is an automated notification from the Plato booking system.</p>
</div>`
        };
        await client.send(msg);
        console.log(`Admin notification email sent for booking by ${booking.name}`);
        return true;
    } catch (error) {
        console.error('Failed to send admin notification email:', error?.response?.body || error.message);
        return false;
    }
}
}),
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/punycode [external] (punycode, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("punycode", () => require("punycode"));

module.exports = mod;
}),
"[externals]/querystring [external] (querystring, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("querystring", () => require("querystring"));

module.exports = mod;
}),
"[externals]/node:events [external] (node:events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:events", () => require("node:events"));

module.exports = mod;
}),
"[externals]/node:process [external] (node:process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:process", () => require("node:process"));

module.exports = mod;
}),
"[externals]/node:util [external] (node:util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:util", () => require("node:util"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/process [external] (process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("process", () => require("process"));

module.exports = mod;
}),
"[project]/src/lib/server/calendar.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createDemoEvent",
    ()=>createDemoEvent
]);
// Google Calendar integration for creating demo booking events with Google Meet links
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$googleapis$2f$build$2f$src$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/googleapis/build/src/index.js [app-route] (ecmascript)");
;
let connectionSettings;
async function getAccessToken() {
    if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
        return connectionSettings.settings.access_token;
    }
    const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
    const xReplitToken = process.env.REPL_IDENTITY ? 'repl ' + process.env.REPL_IDENTITY : process.env.WEB_REPL_RENEWAL ? 'depl ' + process.env.WEB_REPL_RENEWAL : null;
    if (!xReplitToken) {
        throw new Error('X-Replit-Token not found for repl/depl');
    }
    connectionSettings = await fetch('https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=google-calendar', {
        headers: {
            'Accept': 'application/json',
            'X-Replit-Token': xReplitToken
        }
    }).then((res)=>res.json()).then((data)=>data.items?.[0]);
    const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;
    if (!connectionSettings || !accessToken) {
        throw new Error('Google Calendar not connected');
    }
    return accessToken;
}
async function getUncachableGoogleCalendarClient() {
    const accessToken = await getAccessToken();
    const oauth2Client = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$googleapis$2f$build$2f$src$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["google"].auth.OAuth2();
    oauth2Client.setCredentials({
        access_token: accessToken
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$googleapis$2f$build$2f$src$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["google"].calendar({
        version: 'v3',
        auth: oauth2Client
    });
}
function parseTime(timeStr) {
    const match = timeStr.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
    if (!match) throw new Error(`Invalid time format: ${timeStr}`);
    let hour = parseInt(match[1], 10);
    const minute = parseInt(match[2], 10);
    const ampm = match[3].toUpperCase();
    if (ampm === 'PM' && hour !== 12) hour += 12;
    if (ampm === 'AM' && hour === 12) hour = 0;
    return {
        hour,
        minute
    };
}
async function createDemoEvent(booking) {
    const calendar = await getUncachableGoogleCalendarClient();
    const { hour, minute } = parseTime(booking.bookingTime);
    const startDate = new Date(`${booking.bookingDate}T${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}:00`);
    const endDate = new Date(startDate.getTime() + 30 * 60 * 1000);
    const formatForCalendar = (d)=>{
        const y = d.getFullYear();
        const mo = String(d.getMonth() + 1).padStart(2, '0');
        const da = String(d.getDate()).padStart(2, '0');
        const h = String(d.getHours()).padStart(2, '0');
        const mi = String(d.getMinutes()).padStart(2, '0');
        const s = String(d.getSeconds()).padStart(2, '0');
        return `${y}-${mo}-${da}T${h}:${mi}:${s}`;
    };
    const event = {
        summary: `Plato Demo — ${booking.name}`,
        description: `30-minute product demo with ${booking.name}.\n\nWe'll cover:\n• Candidate flow, scoring, and shortlisting\n• Use cases for volume roles, campus hiring, and tech hiring\n• Q&A and next steps\n\nBooker email: ${booking.email}`,
        start: {
            dateTime: formatForCalendar(startDate),
            timeZone: 'Africa/Cairo'
        },
        end: {
            dateTime: formatForCalendar(endDate),
            timeZone: 'Africa/Cairo'
        },
        attendees: [
            {
                email: booking.email,
                displayName: booking.name
            }
        ],
        conferenceData: {
            createRequest: {
                requestId: `plato-demo-${booking.bookingDate}-${hour}${minute}-${Date.now()}`,
                conferenceSolutionKey: {
                    type: 'hangoutsMeet'
                }
            }
        },
        reminders: {
            useDefault: false,
            overrides: [
                {
                    method: 'email',
                    minutes: 60
                },
                {
                    method: 'popup',
                    minutes: 10
                }
            ]
        },
        sendUpdates: 'all'
    };
    const response = await calendar.events.insert({
        calendarId: 'primary',
        requestBody: event,
        conferenceDataVersion: 1,
        sendUpdates: 'all'
    });
    const meetLink = response.data.hangoutLink || response.data.conferenceData?.entryPoints?.[0]?.uri || '';
    const eventLink = response.data.htmlLink || '';
    console.log(`Google Calendar event created for ${booking.name} — Meet link: ${meetLink}`);
    return {
        meetLink,
        eventLink
    };
}
}),
"[project]/src/app/api/demo-bookings/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$server$2f$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/server/storage.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/schema.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$server$2f$email$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/server/email.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$server$2f$calendar$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/server/calendar.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$server$2f$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$server$2f$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
async function GET(req) {
    const date = req.nextUrl.searchParams.get("date");
    if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Invalid date format. Use YYYY-MM-DD."
        }, {
            status: 400
        });
    }
    const bookings = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$server$2f$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["storage"].getBookingsByDate(date);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(bookings.map((b)=>({
            time: b.bookingTime
        })));
}
async function POST(req) {
    const body = await req.json();
    const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["insertDemoBookingSchema"].safeParse(body);
    if (!parsed.success) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Invalid booking data.",
            details: parsed.error.flatten()
        }, {
            status: 400
        });
    }
    const bookingDate = new Date(parsed.data.bookingDate + "T00:00:00");
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    if (bookingDate < now) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Cannot book a date in the past."
        }, {
            status: 400
        });
    }
    const dayOfWeek = bookingDate.getDay();
    if (dayOfWeek === 5 || dayOfWeek === 6) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Cannot book on weekends."
        }, {
            status: 400
        });
    }
    try {
        const booking = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$server$2f$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["storage"].createBooking(parsed.data);
        const emailData = {
            name: parsed.data.name,
            email: parsed.data.email,
            bookingDate: parsed.data.bookingDate,
            bookingTime: parsed.data.bookingTime,
            meetLink: "",
            eventLink: ""
        };
        try {
            const calendarResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$server$2f$calendar$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createDemoEvent"])(parsed.data);
            emailData.meetLink = calendarResult.meetLink;
            emailData.eventLink = calendarResult.eventLink;
        } catch (calErr) {
            console.error("Failed to create Google Calendar event:", calErr.message);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$server$2f$email$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendBookingConfirmation"])(emailData).catch(()=>{});
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$server$2f$email$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendBookingNotificationToAdmin"])(emailData).catch(()=>{});
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            id: booking.id,
            date: booking.bookingDate,
            time: booking.bookingTime
        }, {
            status: 201
        });
    } catch (err) {
        if (err.code === "23505") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "This time slot is already booked."
            }, {
                status: 409
            });
        }
        throw err;
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c76cfc63._.js.map
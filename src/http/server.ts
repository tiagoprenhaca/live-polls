import cookie from "@fastify/cookie";
import websocket from "@fastify/websocket";
import fastify from "fastify";

import { createPoll } from "./routes/create-poll";
import { getPoll } from "./routes/get-poll";
import { getPolls } from "./routes/get-polls";
import { voteOnPoll } from "./routes/vote-on-poll";
import { pollResults } from "./ws/poll-results";

const app = fastify();

app.register(cookie, {
  secret: "polls-live-app",
  hook: "onRequest",
});

app.register(websocket);

app.register(createPoll);
app.register(getPoll);
app.register(getPolls);
app.register(voteOnPoll);

app.register(pollResults);

app.listen({ port: 3333 }).then(() => {
  console.log("Server running on port 3333");
});
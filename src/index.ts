/** @format */

import server from "./server";

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`El servidor esta corriendo en el puerto ${port}`);
});

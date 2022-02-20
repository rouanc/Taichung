const fs = require("fs")

//read sync of 3dtiles json
const gjson = JSON.parse(
  fs.readFileSync("./063Dtiles/taichung_4326/tileset.json")
)

const maxfloor = {}
for (const fea of gjson.properties) {
  maxfloor[fea.floors.maximum].push(0)
}

color: {
          conditions: [
            ["${floors} > 13", "color('#58152e')"],
            ["${floors} > 12", "color('#8f152e')"],
            ["${floors} > 11", "color('#bb152e')"],
            ["${floors} > 10", "color('#ea172f')"],
            ["${floors} > 9", "color('#fb4166')"],
            ["${floors} > 8", "color('#fb7914')"],
            ["${floors} > 7", "color('#fba25b')"],
            ["${floors} > 6", "color('#ffce59')"],
            ["${floors} > 5", "color('#f8eb87')"],
            ["${floors} > 4", "color('#cfe56a')"],
            ["${floors} > 3", "color('#a6d96a')"],
            ["${floors} > 2", "color('#49bc3e')"],
            ["${floors} > 1", "color('#1a9641')"],
            ["true", "color('#D7FFF0')"],
          ],
        },

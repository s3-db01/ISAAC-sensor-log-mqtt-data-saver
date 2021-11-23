const db = require("../models");
const SensorLog = db.sensorlogs;

exports.create = async (req) => {

    const json = await JSON.parse(req);

    // Create a SensorLog
    const sensorLog = {
        id : json.sensordata[0]["x-coord"] + "-" + json.sensordata[0]["y-coord"],
        humidity: null,
        temperature: null,
        up_time: null
    };

    console.log(sensorLog);

    // Save SensorLog in the database
        SensorLog.create(sensorLog)
        .then(data => {
            console.log("s");
        })
        .catch(err => {
            console.log("Error " + err);
        });

};
const db = require("../models");
const SensorLog = db.sensorlogs;

exports.create = (data, res) => {

    const json = JSON.parse(data);

    const sensorLog = {
        sensor_id: json.sensordata[0]["x-coord"] + "-" + json.sensordata[0]["y-coord"],
        humidity: null,
        temperature: null,
        up_time: null
    };

    console.log(sensorLog);

    SensorLog.create(sensorLog)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the SensorLog."
            });
        });
};
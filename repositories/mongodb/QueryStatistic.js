const BaseStatistic = require('../base/BaseStatistic');

class QueryStatistic extends BaseStatistic {
    constructor(connection) {
        super(connection);
    }

    async perform(query) {
        try {
            const startTime = process.hrtime();
            const [rows, fields] = await this.connection.execute(query);
            const endTime = process.hrtime(startTime);
            return {
                'data': rows,
                'time': (endTime[0] * 1e9 + endTime[1]) / 1e6,
            };
        } catch (error) {
            throw new Error('Failed to execute query');
        }
    }
}

module.exports = QueryStatistic;
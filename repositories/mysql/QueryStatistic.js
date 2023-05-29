const { performance } = require('perf_hooks');
const BaseStatistic = require('../base/BaseStatistic');

class QueryStatistic extends BaseStatistic {
    constructor(connection) {
        super(connection);
    }

    async perform(query) {
        try {
            const startTime = performance.now();
            const [rows, fields] = await this.connection.execute(query);
            const endTime = performance.now();
            return {
                'data': rows,
                'time': (endTime - startTime),
            };
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = QueryStatistic;
const { performance } = require('perf_hooks');
const BaseStatistic = require('../base/BaseStatistic');
const StatisticData = require('../base/StatisticData');

class QueryStatistic extends BaseStatistic {
    constructor(connection, options = {}) {
        super(connection);
        this.options = options;
    }

    async perform(query, params = []) {
        try {
            const startTime = performance.now();
            const [rows, fields] = await this.connection.query(query, params);
            const endTime = performance.now();
            const statistics = new StatisticData(rows, rows.length, (endTime - startTime), {
                entity: this.options.entity,
                type: this.options.type,
                path: this.options.path,
            });
            statistics.log();
            return statistics.get();
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = QueryStatistic;
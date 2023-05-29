const Logger = require('../../log/Logger');

class StatisticData {
    constructor(data, total, time, options = {}) {
        this.data = data;
        this.time = time;
        this.total = total;
        this.options = options;
    }

    get() {        
        return {
            statistics: {
                'entity': this.options.entity,
                'total': this.total,
                'time': this.time,
            },
            data: this.data,
        };
    }
    
    async log() {
        const data = await this.get();
        const logger = new Logger(this.options.path, this.options.type);
        logger.update(data.statistics);
    }
}

module.exports = StatisticData;
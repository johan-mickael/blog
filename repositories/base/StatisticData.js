class StatisticData {
    constructor(data, total, time) {
        this.data = data;
        this.time = time;
        this.total = total;
    }

    get() {
        return {
            'total': this.total,
            'time': this.time,
            'data': this.data,
        };
    }
}

module.exports = StatisticData;
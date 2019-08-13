module.exports = () => {
    Array.prototype.groupBy = function (fieldKey, listName) {
        const groups = this.reduce((groups, item) => {
            const field = item[fieldKey];
            if (!groups[field]) {
                groups[field] = [];
            }
            groups[field].push(item);
            return groups;
        }, {});

        return Object.keys(groups).map(fieldValue => {
            const field = {};

            field[fieldKey] = fieldValue;
            field[listName] = groups[fieldValue]
            return field;
        });
    };

    Date.prototype.subtract = function (otherDate) {
        var oneDay = 1000 * 60 * 60 * 24;

        var dateMsOne = this.getTime();
        var dateMsTwo = otherDate.getTime();

        var diffMs = dateMsOne - dateMsTwo;

        return Math.round((diffMs / oneDay) + 1);
    };
};
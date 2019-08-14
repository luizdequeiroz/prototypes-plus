module.exports = () => {
    /**
     * Função para agrupar itens de uma lista orientado a um field específico.
     * @param {string} fieldKey
     * @param {string} listName
     */
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

    /**
     * Função para extrair a diferença, em dias, entre a data atual e outra posterior.
     * @param {Date} otherDate
     */
    Date.prototype.subtract = function (otherDate) {
        var oneDay = 1000 * 60 * 60 * 24;

        var dateMsOne = this.getTime();
        var dateMsTwo = otherDate.getTime();

        var diffMs = dateMsOne - dateMsTwo;

        return Math.round((diffMs / oneDay) + 1);
    };

    /**
     * Função para serializar um objeto em parâmetros de url (key=value).
     */
    Object.prototype.serializeToUrl = function () {
        return `?${Object.keys(this).reduce(
            (a, k) => {
                a.push(`${k}=encodeURIComponent(${this[k]})`);
                return a;
            }, []).join('&')}`;
    }

    /**
     * Função para transformar apenas a primeira letra de cada palavra em caixa alta.
     */
    String.prototype.toTitleCase = function () {
        return this.replace(/\w\S*/g,
            (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
        );
    }
};
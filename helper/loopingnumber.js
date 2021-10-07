const hbs = require("hbs");
const dbConnection = require("../connection/db");
const prodQuery = "SELECT * FROM tb_products WHERE id";
const prodID = prodQuery.length;
const purchQuery = "SELECT * FROM tb_purchases WHERE id";
const purchID = purchQuery.length;
const rentQuery = "SELECT * FROM tb_rent WHERE id";
const rentID = rentQuery.length;
const supplierQuery = "SELECT * FROM tb_supplier WHERE id";
const supplierID = supplierQuery.length;

const prodNumb = hbs.registerHelper('prodNumb', function (n, block) {
    const accum = '';
    n = prodID;
    for (let i = 0; i < n; ++i)
        accum += block.fn(i);
    return accum;
});

const purchNumb = hbs.registerHelper('purchNumb', function (n, block) {
    const accum = '';
    n = purchID;
        for (let i = 0; i < id; ++i)
        accum += block.fn(i);
    return accum;
});

const rentNumb = hbs.registerHelper('purchNumb', function (n, block) {
    const accum = '';
    n = rentID;
        for (let i = 0; i < id; ++i)
        accum += block.fn(i);
    return accum;
});

const supplierNumb = hbs.registerHelper('purchNumb', function (n, block) {
    const accum = '';
    n = supplierID;
        for (let i = 0; i < id; ++i)
        accum += block.fn(i);
    return accum;
});

module.exports = prodNumb, purchNumb, rentNumb, supplierNumb;
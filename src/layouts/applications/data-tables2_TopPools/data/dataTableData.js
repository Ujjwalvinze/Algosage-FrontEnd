const axios = require("axios");

const dataTableData = {
  columns: [
    { Header: "Token 1", accessor: "token0", width: "20%" },
    { Header: "Token 2", accessor: "token1", width: "25%" },
    { Header: "TVL", accessor: "TVL" },
  ],

  rows: [],
};

export default dataTableData;

const axios = require('axios');

const dataTableData = {
  columns: [
    { Header: "Token 1", accessor: "token0", width: "20%" },
    { Header: "Token 2", accessor: "token1", width: "25%" },
    { Header: "TVL", accessor: "TVL" },
  ],

  rows: [],
};

async function getPoolsData() {
  const query = `
  {
    pools(first: 10, orderBy: totalValueLockedUSD, orderDirection: desc) {
      token0 {
        symbol
      }
      token1 {
        symbol
      }
      totalValueLockedUSD
    }
  }
  `;

  const result = await axios({
    url: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3',
    method: 'post',
    data: {
      query: query
    }
  });

  const pools = result.data.data.pools;

  pools.forEach(pool => {
    dataTableData.rows.push({
      "token0": pool.token0.symbol,
      "token1": pool.token1.symbol,
      "TVL": pool.totalValueLockedUSD,
    });
  });
}
console.log(dataTableData.rows);

getPoolsData();

export default dataTableData;

const SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT8_iwto_QBz5cT_aumMT7DLM1RGwhVFHBM6no9Bq6cnrnk5wCFytvnXtAbZv9I5ZeDbECu4zTXPw2N/pub?gid=0&single=true&output=csv';

exports.handler = async function(event, context) {
  try {
    const response = await fetch(SHEET_URL);
    const csv = await response.text();
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/csv',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=300',
      },
      body: csv,
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};

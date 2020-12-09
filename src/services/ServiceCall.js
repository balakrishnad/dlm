import axios from 'axios'

export function getPaySummaryData() {
  return axios.get('/mockdata/dummy.json')
}

import axios from "axios"
let handler = async (m, { args }) => {
if (!args[0]) throw "*[βππππβ] π΄ππ²ππΈπ±π° π΄π» π½πΎπΌπ±ππ΄ π³π΄ ππ πΏπ°πΈπ πΎ π²πΈππ³π°π³*"
try {
const response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`)
const res = await response
const name = res.data.name
const Country = res.data.sys.country
const Weather = res.data.weather[0].description
const Temperature = res.data.main.temp + "Β°C"
const Minimum_Temperature = res.data.main.temp_min + "Β°C"
const Maximum_Temperature = res.data.main.temp_max + "Β°C"
const Humidity = res.data.main.humidity + "%"
const Wind = res.data.wind.speed + "km/h"
const wea = `γ π γπ»ππΆπ°π: ${name}\nγ πΊοΈ γπΏπ°πΈπ: ${Country}\nγ π€οΈ γππΈπ΄πΌπΏπΎ: ${Weather}\nγ π‘οΈ γππ΄πΌπΏπ΄ππ°ππππ°: ${Temperature}\nγ π  γ ππ΄πΌπΏπ΄ππ°ππππ° πΌπΈπ½πΈπΌπ°: ${Minimum_Temperature}\nγ π γ ππ΄πΌπΏπ΄ππ°ππππ° πΌπ°ππΈπΌπ°: ${Maximum_Temperature}\nγ π¦ γπ·ππΌπ΄π³π°π³: ${Humidity}\nγ π¬οΈ γ ππΈπ΄π½ππΎ: ${Wind}`
m.reply(wea)
} catch {
return "*[βππππβ] π½πΎ ππ΄ π·π°π½ π΄π½π²πΎπ½πππ°π³πΎ ππ΄πππ»ππ°π³πΎπ, π²πΎπππΎπ±πΎππ΄ πππ΄ π·π°ππ° π΄ππ²ππΈππΎ π²πΎπππ΄π²ππ°πΌπ΄π½ππ΄ ππ πΏπ°πΈπ πΎ π²πΈππ³π°π³*"}}
handler.help = ['clima *<ciudad/paΓ­s>*']
handler.tags = ['herramientas']
handler.command = /^(clima|tiempo)$/i
export default handler

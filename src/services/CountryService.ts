import superagent from "superagent";

export default class CountryService {
    async getCountries(): Promise<any> {
    const res = await superagent.get("./countries.json").then((res) =>{
      console.log(res)
      return res.body.data;
    }
    );
  }
}
